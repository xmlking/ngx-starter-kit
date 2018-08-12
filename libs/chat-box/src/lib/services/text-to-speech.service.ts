import { Injectable } from '@angular/core';

@Injectable()
export class TextToSpeechService {
  public canUseSpeechSynthesis = false;
  private speechSynthesis: SpeechSynthesis;
  constructor() {
    if ('speechSynthesis' in window) {
      this.canUseSpeechSynthesis = true;
      this.speechSynthesis = (window as any).speechSynthesis;
    }
  }

  public synthesisVoice(text: string, voice: SpeechSynthesisVoice): void {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voice;
    utterance.text = text;
    // utterance.volume = 1; // 0 to 1
    // utterance.rate = 1; // 0.1 to 10
    // utterance.pitch = 0; // 0 to 2
    this.speechSynthesis.speak(utterance);
  }

  public async getVoiceList(): Promise<SpeechSynthesisVoice[]> {
    await new Promise((resolve, reject) => {
      this.speechSynthesis.addEventListener('voiceschanged', resolve);
    });
    return this.speechSynthesis.getVoices();

    // return new Promise((resolve: any, reject: any): void => {
    //   // With Chrome, we have to wait for onvoiceschanged event to fire before calling getVoices
    //   if (this.speechSynthesis.onvoiceschanged !== undefined) {
    //     this.speechSynthesis.onvoiceschanged = (): void => {
    //       resolve(this.speechSynthesis.getVoices());
    //     };
    //   } else {
    //     resolve(this.speechSynthesis.getVoices());
    //   }
    // });
  }
}
