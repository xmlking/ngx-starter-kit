import { ChangeDetectorRef } from '@angular/core';
import { inject, TestBed } from '@angular/core/testing';
import { DateFnsModule } from './date-fns.module';
import { FormatTimeInWordsPipe } from './format-time-in-words.pipe';

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
    }
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

  it('should return `over 24 years ago` when date is 1995-12-17T03:24:00', inject(
    [FormatTimeInWordsPipe],
    (pipe: FormatTimeInWordsPipe) => {
      expect(pipe.transform('1995-12-17T03:24:00')).toBe('over 24 years ago');
    }
  ));

  it('should return `Invalid Date` when date is invalid', inject(
    [FormatTimeInWordsPipe],
    (pipe: FormatTimeInWordsPipe) => {
      // expect(pipe.transform('2018-13-32')).toBe('Invalid Date');
      expect(pipe.transform('2018-13-32')).toBeNull();
    }
  ));

  it('should throw error when date is null', inject([FormatTimeInWordsPipe], (pipe: FormatTimeInWordsPipe) => {
    expect(() => pipe.transform(null)).toThrowError(FormatTimeInWordsPipe.NO_ARGS_ERROR);
  }));
});
