import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { ChatBoxState } from '../../state/chat-box.store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UpdateForm, UpdateFormDirty, UpdateFormValue } from '@ngxs/form-plugin';

@Component({
  selector: 'ngx-text-to-speech-preferences',
  templateUrl: './text-to-speech-preferences.component.html',
  styleUrls: ['./text-to-speech-preferences.component.scss'],
})
export class TextToSpeechPreferencesComponent implements OnInit {
  voices: SpeechSynthesisVoice[];
  voiceForm: FormGroup;
  constructor(private store: Store, private fb: FormBuilder) {}

  ngOnInit() {
    this.voices = this.store.selectSnapshot(ChatBoxState.getVoices);
    this.buildForm();
  }

  buildForm() {
    this.voiceForm = this.fb.group({
      voice: [this.voices[48]],
      volume: [1, Validators.required],
      rate: [1, Validators.required],
      pitch: [1, Validators.required],
    });
  }

  reset() {
    this.store.dispatch(
      new UpdateForm({
        path: 'chatbox.voiceForm',
        value: {
          voice: this.voices[48],
          volume: 1,
          rate: 1,
          pitch: 1,
        },
        dirty: false,
        status: 'VALID',
        errors: {},
      }),
    );
  }
}
