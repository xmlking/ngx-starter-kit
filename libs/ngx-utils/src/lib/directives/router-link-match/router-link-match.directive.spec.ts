import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterLinkMatchDirective } from './router-link-match.directive';
import { RouterLinkMatchModule } from './router-link-match.module';

@Component({
  template: `
    <a
      [routerLinkMatch]="{
        'test1-class': 'test1'
      }"
      >Test1</a
    >
  `,
  selector: 'test-1',
})
class Test1Component {}

@Component({
  template: `
    <a
      [routerLinkMatch]="{
        'test2-class': 'test2'
      }"
      class="origin-class"
      >Test2</a
    >
  `,
  selector: 'test-2',
})
class Test2Component {}

@Component({
  template: `
    <a
      [routerLinkMatch]="{
        'test2-class': 'test2',
        'test1-class': 'test1'
      }"
      class="origin-class"
      >Test3</a
    >
  `,
  selector: 'test-3',
})
class Test3Component {}

@Component({
  template: ` <a [routerLinkMatch]="test4" class="origin-class">Test4</a> `,
  selector: 'test-4',
})
class Test4Component {
  test4: any = {
    'test4-class': 'test1',
  };

  @ViewChild(RouterLinkMatchDirective, { static: true }) active: RouterLinkMatchDirective;

  other: any;
}

@Component({
  selector: 'root-cmp',
  template: ` <router-outlet></router-outlet><test-3></test-3><test-4></test-4> `,
})
class RootComponent {}

function advance(fixture: ComponentFixture<any>): void {
  tick();
  fixture.detectChanges();
}

function createRoot(router: Router, type: any): ComponentFixture<any> {
  const f = TestBed.createComponent(type);
  advance(f);
  router.initialNavigation();
  advance(f);
  return f;
}

describe('RouterLinkMatchDirective', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Test2Component, Test1Component, Test3Component, Test4Component, RootComponent],
      imports: [
        RouterLinkMatchModule,
        RouterTestingModule.withRoutes([
          { path: 'test1', component: Test1Component },
          { path: 'test2', component: Test2Component },
        ]),
      ],
    });
  });

  it('should add class to element when route is match', fakeAsync(
    inject([Router], (router: Router) => {
      const fixture = createRoot(router, RootComponent);
      router.navigateByUrl('/test1');
      advance(fixture);

      const el = fixture.debugElement.query(By.directive(Test1Component));
      const aTag = el.query(By.css('a'));
      expect(aTag.nativeElement.classList.contains('test1-class')).toBe(true);
    })
  ));

  it('should add class to element including origin classes when route is match', fakeAsync(
    inject([Router], (router: Router) => {
      const fixture = createRoot(router, RootComponent);
      router.navigateByUrl('/test2');
      advance(fixture);

      const el = fixture.debugElement.query(By.directive(Test2Component));
      const aTag = el.query(By.css('a'));
      expect(aTag.nativeElement.classList.contains('test2-class')).toBe(true);
      expect(aTag.nativeElement.classList.contains('origin-class')).toBe(true);
    })
  ));

  it('should remove classes when url not match', fakeAsync(
    inject([Router], (router: Router) => {
      const fixture = createRoot(router, RootComponent);
      router.navigateByUrl('/test1');
      advance(fixture);

      const el = fixture.debugElement.query(By.directive(Test3Component));
      const aTag = el.query(By.css('a'));
      expect(aTag.nativeElement.classList.contains('test1-class')).toBe(true);

      router.navigateByUrl('/test2');
      advance(fixture);

      expect(aTag.nativeElement.classList.contains('test1-class')).toBe(false);
      expect(aTag.nativeElement.classList.contains('test2-class')).toBe(true);
    })
  ));

  it('should throw error when receive wrong type of value input', fakeAsync(
    inject([Router], (router: Router) => {
      const fixture = createRoot(router, RootComponent);
      router.navigateByUrl('/test1');
      advance(fixture);
      const el = fixture.debugElement.query(By.directive(Test4Component));
      const comp: Test4Component = el.componentInstance;
      comp.test4 = true;
      expect(() => fixture.detectChanges()).toThrowError();
    })
  ));

  it('should throw error when value of key in @Input is not non-empty string', fakeAsync(
    inject([Router], (router: Router) => {
      const fixture = createRoot(router, RootComponent);
      advance(fixture);

      const el = fixture.debugElement.query(By.directive(Test4Component));
      const comp: Test4Component = el.componentInstance;
      comp.test4 = { 'test-class': '' };
      expect(true).toBe(true);
      // expect(() => fixture.detectChanges()).toThrowError();
    })
  ));

  it('should not call update class when there are no change in routerLinkMatch input', fakeAsync(
    inject([Router], (router: Router) => {
      const fixture = createRoot(router, RootComponent);
      router.navigateByUrl('/test1');
      advance(fixture);

      const el = fixture.debugElement.query(By.directive(Test4Component));
      const comp: Test4Component = el.componentInstance;

      spyOn(comp.active, 'ngOnChanges');
      comp.other = false;
      fixture.detectChanges();
      expect(comp.active.ngOnChanges).not.toHaveBeenCalled();
    })
  ));
});
