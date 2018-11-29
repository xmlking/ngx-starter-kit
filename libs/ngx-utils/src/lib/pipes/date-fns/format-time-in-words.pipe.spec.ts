import { inject, TestBed } from '@angular/core/testing';
import { FormatTimeInWordsPipe } from './format-time-in-words.pipe';
import { DateFnsModule } from './date-fns.module';
import { ChangeDetectorRef } from '@angular/core';

class MockChangeDetector {
  markForCheck(): void {}
}

function drinkFlavor(flavor) {
  if (flavor === 'octopus') {
    throw new Error('yuck, octopus flavor');
  }
}

describe('FormatTimeInWordsPipe', () => {
  const fakeChangeDetectorRef = {
    markForCheck: () => {},
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormatTimeInWordsPipe, { provide: ChangeDetectorRef, useValue: fakeChangeDetectorRef }],
      imports: [DateFnsModule],
    });
  });

  it('should transform current date to words', inject([FormatTimeInWordsPipe], (pipe: FormatTimeInWordsPipe) => {
    expect(pipe.transform(new Date(), { addSuffix: true })).toBe('less than a minute ago');
  }));

  it('should transform current date to words without ago', inject(
    [FormatTimeInWordsPipe],
    (pipe: FormatTimeInWordsPipe) => {
      expect(pipe.transform(new Date(), { addSuffix: false })).toBe('less than a minute');
    },
  ));

  it('should transform future date to words', inject([FormatTimeInWordsPipe], (pipe: FormatTimeInWordsPipe) => {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    expect(pipe.transform(tomorrow)).toBe('in 1 day');
  }));

  it('should transform past date to words', inject([FormatTimeInWordsPipe], (pipe: FormatTimeInWordsPipe) => {
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    expect(pipe.transform(yesterday)).toBe('1 day ago');
  }));

  it('should return `Invalid Date` when date is invalid', inject(
    [FormatTimeInWordsPipe],
    (pipe: FormatTimeInWordsPipe) => {
      expect(pipe.transform('err')).toBe('Invalid Date');
    },
  ));

  it('should throw error when date is null', inject([FormatTimeInWordsPipe], (pipe: FormatTimeInWordsPipe) => {
    expect(() => pipe.transform(null)).toThrowError(FormatTimeInWordsPipe.NO_ARGS_ERROR);
  }));
});
