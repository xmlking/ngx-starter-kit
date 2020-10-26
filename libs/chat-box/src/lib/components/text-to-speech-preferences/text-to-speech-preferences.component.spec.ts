import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextToSpeechPreferencesComponent } from './text-to-speech-preferences.component';

describe('TextToSpeechPreferencesComponent', () => {
  let component: TextToSpeechPreferencesComponent;
  let fixture: ComponentFixture<TextToSpeechPreferencesComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TextToSpeechPreferencesComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TextToSpeechPreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
