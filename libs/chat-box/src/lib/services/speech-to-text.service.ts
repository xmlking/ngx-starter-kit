import { Inject, Injectable } from '@angular/core';
import { BrowserFeatureKey, FeatureService, WINDOW } from '@ngx-starter-kit/core';

const SpeechRecognition =
  (window as any).webkitSpeechRecognition ||
  (window as any).mozSpeechRecognition ||
  (window as any).msSpeechRecognition ||
  (window as any).oSpeechRecognition ||
  (window as any).SpeechRecognition;

/** @dynamic */
@Injectable()
export class SpeechToTextService {
  public canUseSpeechRecognition = false;
  private speechRecognition: any;
  constructor(private readonly featureService: FeatureService, @Inject(WINDOW) private window: Window) {
    this.canUseSpeechRecognition = this.featureService.detectFeature(BrowserFeatureKey.SpeechRecognition).supported;
    if (this.canUseSpeechRecognition) {
      this.speechRecognition = new SpeechRecognition();
      this.speechRecognition.continuous = false; // FIXME: Gecko?
      this.speechRecognition.lang = 'en-US';
      this.speechRecognition.interimResults = false;
      this.speechRecognition.maxAlternatives = 1;
      // recognition.grammars = new SpeechGrammarList();
    }
  }

  public getVoiceMessage(): Promise<string> {
    return new Promise(
      (resolve: any, reject: any): void => {
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
          // prettier-ignore
          reject('I didn\'t recognise your question.');
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
      },
    );
  }
}
