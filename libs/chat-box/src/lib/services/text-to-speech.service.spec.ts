import { TestBed, inject } from '@angular/core/testing';

import { TextToSpeechService } from './text-to-speech.service';

describe('TextToSpeechService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TextToSpeechService],
    });
  });

  it('should be created', inject([TextToSpeechService], (service: TextToSpeechService) => {
    expect(service).toBeTruthy();
  }));
});
