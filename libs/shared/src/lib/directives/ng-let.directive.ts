import {
  NgModule,
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

export class NgLetContext {
  $implicit: any = null;
  ngLet: any = null;
}

@Directive({
  selector: '[ngLet]'
})
export class NgLetDirective {
  private _context = new NgLetContext();

  @Input()
  set ngLet(value: any) {
    this._context.$implicit = this._context.ngLet = value;
  }

  constructor(_vcr: ViewContainerRef, _templateRef: TemplateRef<NgLetContext>) {
    _vcr.createEmbeddedView(_templateRef, this._context);
  }
}
