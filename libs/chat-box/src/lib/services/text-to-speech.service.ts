import { Inject, Injectable } from '@angular/core';
import { SynthesisVoice } from '../state/chat-box.actions';
import { BrowserFeatureKey, FeatureService, WINDOW } from '@ngx-starter-kit/core';

/** @dynamic */
@Injectable()
export class TextToSpeechService {
  public canUseSpeechSynthesis = false;
  private speechSynthesis: SpeechSynthesis;
  constructor(private readonly featureService: FeatureService, @Inject(WINDOW) private window: Window) {
    this.canUseSpeechSynthesis = this.featureService.detectFeature(BrowserFeatureKey.SpeechSynthesis).supported;
    if (this.canUseSpeechSynthesis) {
      this.speechSynthesis = (window as any).speechSynthesis;
    }
  }

  public synthesisVoice(text: string, voice: SynthesisVoice): void {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voice.voice;
    utterance.text = text;
    utterance.volume = voice.volume; // 0 to 1
    utterance.rate = voice.rate; // 0.1 to 10
    utterance.pitch = voice.pitch; // 0 to 2
    this.speechSynthesis.speak(utterance);
  }

  public async getVoiceList(): Promise<SpeechSynthesisVoice[]> {
    if ('onvoiceschanged' in speechSynthesis) {
      await new Promise((resolve, reject) => {
        this.speechSynthesis.addEventListener('voiceschanged', resolve);
      });
    }
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
