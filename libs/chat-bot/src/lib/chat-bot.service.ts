import { Injectable, NgZone, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiAiClient } from 'api-ai-javascript';
import { environment } from '@env/environment';
import { ChatBotModule } from './chat-bot.module';

const SpeechRecognition =
  (window as any).webkitSpeechRecognition ||
  (window as any).mozSpeechRecognition ||
  (window as any).msSpeechRecognition ||
  (window as any).oSpeechRecognition ||
  (window as any).SpeechRecognition;
const SpeechGrammarList =
  (window as any).SpeechGrammarList || (window as any).webkitSpeechGrammarList;
const SpeechRecognitionEvent =
  (window as any).SpeechRecognitionEvent ||
  (window as any).webkitSpeechRecognitionEvent;

export class Message {
  constructor(public content: string, public sentBy: string) {}
}

@Injectable()
// @Injectable({providedIn: ChatBotModule})
export class ChatBotService implements OnDestroy {
  readonly client = new ApiAiClient({
    accessToken: environment.dialogFlow.apiToken
  });
  conversation = new BehaviorSubject<Message[]>([]);

  public canUseSpeechRecognition = false;
  public canUseSpeechSynthesis = false;
  private speechRecognition: any;
  private speechSynthesis: SpeechSynthesis;

  constructor(private zone: NgZone) {
    if (SpeechRecognition !== undefined) {
      this.canUseSpeechRecognition = true;
      this.speechRecognition = new SpeechRecognition();
      this.speechRecognition.continuous = false; //FIXME: Gecko?
      this.speechRecognition.lang = 'en-US';
      this.speechRecognition.interimResults = false;
      this.speechRecognition.maxAlternatives = 1;
      //recognition.grammars = new SpeechGrammarList();
    }

    if ('speechSynthesis' in window) {
      this.canUseSpeechSynthesis = true;
      this.speechSynthesis = (window as any).speechSynthesis;
    }
  }

  ngOnDestroy() {
    console.log('ChatBotService ngOnDestroy');
  }

  private update(msg: Message) {
    this.conversation.next([msg]);
  }

  textConversation(msg: string) {
    const userMessage = new Message(msg, 'user');
    this.update(userMessage);
    return this.client.textRequest(msg).then(res => {
      const speech = res.result.fulfillment.speech;
      const botMessage = new Message(speech, 'bot');
      this.update(botMessage);
      return speech;
    });
  }

  public voiceConversation(): Promise<string> {
    return new Promise((resolve: any, reject: any): void => {
      this.speechRecognition.onresult = (speech: any): void => {
        let sentence = '';
        if (speech.results) {
          const result = speech.results[speech.resultIndex];
          const transcript = result[0].transcript;
          if (result.isFinal) {
            if (result[0].confidence < 0.1) {
              console.log('Unrecognized result - Please try again');
            } else {
              sentence = transcript.trim();
              console.log(`Sentence: ${sentence}`);
              console.log(`Confidence: ${result[0].confidence}`);
              // console.log(`Did you said? -> ${sentence}, If not, try again...`);
              resolve(sentence);
            }
          }
        }
      };

      this.speechRecognition.onspeechend = (ev: Event): void => {
        this.speechRecognition.stop();
      };

      this.speechRecognition.onnomatch = (err: any): void => {
        console.log('No Match');
        reject("I didn't recognise your question.");
      };

      this.speechRecognition.onerror = (err: any): void => {
        console.log('Error: ' + err.error);
        reject(err.error);
      };

      // [
      //     'onaudiostart',
      //     'onaudioend',
      //     'onend',
      //     'onerror',
      //     'onnomatch',
      //     'onresult',
      //     'onsoundstart',
      //     'onsoundend',
      //     'onspeechend',
      //     'onstart',
      // ].forEach((eventName: string): void  => {
      //     this.speechRecognition[eventName] = (e: Event): void => {
      //         console.log(eventName, e);
      //     };
      // });

      this.speechRecognition.start();
      // console.log("I'm listening...");
    });
  }

  public synthesisVoice(text: string, voice: SpeechSynthesisVoice): void {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voice;
    utterance.text = text;
    // utterance.pitch =
    // utterance.rate =
    this.speechSynthesis.speak(utterance);
  }

  public getVoiceList(): Promise<SpeechSynthesisVoice[]> {
    return new Promise((resolve: any, reject: any): void => {
      // With Chrome, we have to wait for onvoiceschanged event to fire before calling getVoices
      if (this.speechSynthesis.onvoiceschanged !== undefined) {
        this.speechSynthesis.onvoiceschanged = (): void => {
          resolve(this.speechSynthesis.getVoices());
        };
      } else {
        resolve(this.speechSynthesis.getVoices());
      }
    });
  }
}
