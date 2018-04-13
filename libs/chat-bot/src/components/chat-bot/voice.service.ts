const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).mozSpeechRecognition ||
  (window as any).msSpeechRecognition || (window as any).oSpeechRecognition || (window as any).SpeechRecognition;
const SpeechGrammarList = (window as any).SpeechGrammarList || (window as any).webkitSpeechGrammarList;
const SpeechRecognitionEvent = (window as any).SpeechRecognitionEvent || (window as any).webkitSpeechRecognitionEvent;

export class VoiceService {

  public canUseSpeechRecognition = false;
  public canUseSpeechSynthesis = false;

  private recognition: any;
  private synth: SpeechSynthesis;
  public voices: SpeechSynthesisVoice[];
  public selectedVoice: SpeechSynthesisVoice;

  constructor() {
    if (SpeechRecognition !== undefined) {
      this.canUseSpeechRecognition = true;
      this.recognition = new SpeechRecognition();
      this.recognition.continuous = false; //FIXME: Gecko?
      this.recognition.lang = 'en-US';
      this.recognition.interimResults = false;
      this.recognition.maxAlternatives = 1;
      //recognition.grammars = new SpeechGrammarList();
    }

    if ('speechSynthesis' in window) {
      this.canUseSpeechSynthesis = true;
      this.synth = (window as any).speechSynthesis;
      console.log(this.synth);
      // With Chrome, we have to wait for the event to fire before populateVoiceList
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = (): void =>  {this.populateVoiceList(); };
      } else {
        this.populateVoiceList();
      }
    }
  }

  public startListening(): Promise<string> {

    return new Promise((resolve: any, reject: any): void => {
      this.recognition.start();

      this.recognition.onresult = (e: any): void => {
        console.log('Result has been detected.');

        const last = e.results.length - 1;
        const text = e.results[last][0].transcript;

        console.log('Result: ' + text);
        console.log('Confidence: ' + e.results[0][0].confidence);

        resolve(text);
      };

      this.recognition.onspeechend = (ev: Event): void => {
        this.recognition.stop();
      };

      this.recognition.onnomatch = (err: any): void => {
        console.log('No Match');
        reject("I didn't recognise your question.");
      };

      this.recognition.onerror = (err: any): void => {
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
      //     this.recognition[eventName] = (e: Event): void => {
      //         console.log(eventName, e);
      //     };
      // });
    });

  }

  public synthesisVoice(text: string): void {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = this.selectedVoice;
    utterance.text = text;
    // utterance.pitch =
    // utterance.rate =
    this.synth.speak(utterance);
  }

  private populateVoiceList(): void {
    this.voices = this.synth.getVoices();
    this.selectedVoice = this.voices[48];
    console.log(this.voices);
    console.log(this.selectedVoice);
  }

}
