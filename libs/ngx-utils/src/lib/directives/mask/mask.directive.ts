import { CommonModule } from '@angular/common';
import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  NgModule,
  OnInit,
  Output,
  PipeTransform,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { KEYS, MaskHelper } from './mask-helper';

export function isIE(): boolean {
  return navigator.appVersion.indexOf('Trident/') > 0;
}

const noop = () => {};

@Directive({
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: MaskDirective, multi: true }],
  selector: '[ngxMask]',
})
export class MaskDirective implements OnInit, ControlValueAccessor {
  @Input('ngxMask') public mask: string;
  @Input() public promptChar: string;
  @Input() public includeLiterals: boolean;
  @Input() public placeholder: string;
  @Input() public displayValuePipe: PipeTransform;
  @Input() public focusedValuePipe: PipeTransform;
  @Input() private dataValue: string;
  @Output() public onValueChange = new EventEmitter<IMaskEventArgs>();
  private get value() {
    return this.nativeElement.value;
  }
  private set value(val) {
    this.nativeElement.value = val;
  }
  private get nativeElement() {
    return this.elementRef.nativeElement;
  }

  private get selectionStart() {
    return this.nativeElement.selectionStart;
  }

  private get selectionEnd() {
    return this.nativeElement.selectionEnd;
  }

  private ctrlDown: boolean;

  private paste: boolean;

  private selection: number;

  private maskOptions = {
    format: '',
    promptChar: '',
  };

  private key;

  private cursorOnPaste;

  private valOnPaste;

  private stopPropagation: boolean;

  private maskHelper: MaskHelper;

  private onTouchedCallback: () => void = noop;

  private onChangeCallback: (_: any) => void = noop;

  constructor(private elementRef: ElementRef) {
    this.maskHelper = new MaskHelper();
  }

  public ngOnInit(): void {
    if (this.promptChar && this.promptChar.length > 1) {
      this.maskOptions.promptChar = this.promptChar = this.promptChar.substring(0, 1);
    }

    this.maskOptions.format = this.mask ? this.mask : 'CCCCCCCCCC';
    this.maskOptions.promptChar = this.promptChar ? this.promptChar : '_';
    this.nativeElement.setAttribute('placeholder', this.placeholder ? this.placeholder : this.maskOptions.format);
  }

  @HostListener('keydown', ['$event'])
  public onKeydown(event): void {
    const key = event.keyCode || event.charCode;

    if (isIE() && this.stopPropagation) {
      this.stopPropagation = false;
    }

    if (key === KEYS.Ctrl) {
      this.ctrlDown = true;
    }

    if ((this.ctrlDown && key === KEYS.Z) || (this.ctrlDown && key === KEYS.Y)) {
      event.preventDefault();
    }

    this.key = key;
    this.selection = Math.abs(this.selectionEnd - this.selectionStart);
  }

  @HostListener('keyup', ['$event'])
  public onKeyup(event): void {
    const key = event.keyCode || event.charCode;

    if (key === KEYS.Ctrl) {
      this.ctrlDown = false;
    }
  }

  @HostListener('paste', ['$event'])
  public onPaste(event): void {
    this.paste = true;

    this.valOnPaste = this.value;
    this.cursorOnPaste = this.getCursorPosition();
  }

  @HostListener('input', ['$event'])
  public onInputChanged(event): void {
    if (isIE() && this.stopPropagation) {
      this.stopPropagation = false;
      return;
    }

    if (this.paste) {
      this.paste = false;

      const clipboardData = this.value.substring(this.cursorOnPaste, this.getCursorPosition());
      this.value = this.maskHelper.parseValueByMaskUponCopyPaste(
        this.valOnPaste,
        this.maskOptions,
        this.cursorOnPaste,
        clipboardData,
        this.selection,
      );

      this.setCursorPosition(this.maskHelper.cursor);
    } else {
      const currentCursorPos = this.getCursorPosition();

      this.maskHelper.data = this.key === KEYS.BACKSPACE || this.key === KEYS.DELETE;

      this.value =
        this.selection && this.selection !== 0
          ? this.maskHelper.parseValueByMaskUponSelection(
              this.value,
              this.maskOptions,
              currentCursorPos - 1,
              this.selection,
            )
          : this.maskHelper.parseValueByMask(this.value, this.maskOptions, currentCursorPos - 1);

      this.setCursorPosition(this.maskHelper.cursor);
    }

    const rawVal = this.maskHelper.restoreValueFromMask(this.value, this.maskOptions);

    this.dataValue = this.includeLiterals ? this.value : rawVal;
    this.onChangeCallback(this.dataValue);

    this.onValueChange.emit({ rawValue: rawVal, formattedValue: this.value });
  }

  @HostListener('focus', ['$event.target.value'])
  public onFocus(value) {
    if (this.focusedValuePipe) {
      if (isIE()) {
        this.stopPropagation = true;
      }
      this.value = this.focusedValuePipe.transform(value);
    } else {
      this.value = this.maskHelper.parseValueByMaskOnInit(this.value, this.maskOptions);
    }
  }

  @HostListener('blur', ['$event.target.value'])
  public onBlur(value) {
    if (this.displayValuePipe) {
      this.value = this.displayValuePipe.transform(value);
    } else if (value === this.maskHelper.parseMask(this.maskOptions)) {
      this.value = '';
    }
  }

  private getCursorPosition(): number {
    return this.nativeElement.selectionStart;
  }

  private setCursorPosition(start: number, end: number = start): void {
    this.nativeElement.setSelectionRange(start, end);
  }

  public writeValue(value) {
    if (this.promptChar && this.promptChar.length > 1) {
      this.maskOptions.promptChar = this.promptChar.substring(0, 1);
    }

    this.value = value ? this.maskHelper.parseValueByMaskOnInit(value, this.maskOptions) : '';
    if (this.displayValuePipe) {
      this.value = this.displayValuePipe.transform(this.value);
    }

    this.dataValue = this.includeLiterals ? this.value : value;
    this.onChangeCallback(this.dataValue);

    this.onValueChange.emit({ rawValue: value, formattedValue: this.value });
  }

  public registerOnChange(fn: (_: any) => void) {
    this.onChangeCallback = fn;
  }

  public registerOnTouched(fn: () => void) {
    this.onTouchedCallback = fn;
  }
}

export interface IMaskEventArgs {
  rawValue: string;
  formattedValue: string;
}
