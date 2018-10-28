import { ApiAiClient, IServerResponse } from '@xmlking/api-ai-javascript/index.js';
import { Injectable, Inject } from '@angular/core';
import { DIALOGFLOW_TOKEN } from './inject-tokens';

@Injectable()
export class NlpService {
  client: ApiAiClient;

  constructor(@Inject(DIALOGFLOW_TOKEN) private accessToken) {
    this.client = new ApiAiClient({ accessToken });
  }

  async process(message: string) {
    try {
      const response = await this.client.textRequest(message);
      const speech = response.result.fulfillment.speech;
      return speech.replace(/<<(.*)>>/gi, ''); //
    } catch (error) {
      console.error(error);
    }
  }

  private sanitize(speech: string): string {
    return speech
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;')
      .replace(/[\n\r]+/g, '<br>');
  }
}
