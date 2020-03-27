import { CommonModule } from '@angular/common';
import { Component, NgModule, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
import { NgLetDirective } from './ng-let.directive';
import { NgLetModule } from './ng-let.module';

@Component({
  template: '',
  selector: 'sand-test',
})
class TestComponent {
  @ViewChild(NgLetDirective, { static: true }) ngLetDirective: NgLetDirective;
  test$: Observable<number>;
  test = 10;
  nestedTest = 20;
  functionTest = (a: number, b: number) => a + b;
}

@NgModule({
  declarations: [TestComponent],
  imports: [NgLetModule, CommonModule],
  exports: [NgLetModule, TestComponent],
})
class TestModule {}

describe('ngLet directive', () => {
  let fixture: ComponentFixture<TestComponent>;
  function getComponent(): TestComponent {
    return fixture.componentInstance;
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestModule],
    });
  });

  afterEach(() => {
    // tslint:disable-next-line
    fixture = null!;
  });

  it('should create NgLetModule', () => {
    expect(new NgLetModule()).toBeTruthy();
  });

  it('should work in a template attribute', async(() => {
    const template = '<span *ngLet="test as i">hello{{ i }}</span>';
    fixture = createTestComponent(template);
    getComponent().test = 7;
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('span')).length).toEqual(1);
    expect(fixture.nativeElement.textContent).toBe('hello7');
  }));

  it('should work on a template element', async(() => {
    const template = '<ng-template [ngLet]="test" let-i>hello{{ i }}</ng-template>';
    fixture = createTestComponent(template);
    getComponent().test = 5;
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toBe('hello5');
  }));

  it('should handle nested ngLet correctly', async(() => {
    const template = '<div *ngLet="test as i"><span *ngLet="nestedTest as k">hello{{ i + k }}</span></div>';

    fixture = createTestComponent(template);

    getComponent().test = 3;
    getComponent().nestedTest = 5;
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('span')).length).toEqual(1);
    expect(fixture.nativeElement.textContent).toBe('hello8');
  }));

  it('should update several nodes', async(() => {
    const template =
      '<span *ngLet="test + 1; let i">helloNumber{{ i }}</span>' +
      '<span *ngLet="functionTest(5, 8) as j">helloFunction{{ j }}</span>';

    fixture = createTestComponent(template);

    getComponent().test = 4;
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('span')).length).toEqual(2);
    expect(fixture.nativeElement.textContent).toContain('helloNumber5helloFunction13');
  }));

  it('should work on async pipe', async(() => {
    const template = '<span *ngLet="test$ | async as t">helloAsync{{ t }}</span>';

    fixture = createTestComponent(template);

    getComponent().test$ = of(15);
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('span')).length).toEqual(1);
    expect(fixture.nativeElement.textContent).toContain('helloAsync15');
  }));

  it('should accept input', async(() => {
    const template = '<span *ngLet="test as i">hello{{ i }}</span>';

    fixture = createTestComponent(template);
    fixture.detectChanges();

    expect(getComponent().ngLetDirective).toBeTruthy();
    getComponent().ngLetDirective.ngLet = 21;
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('hello21');
  }));
});

function createTestComponent(template: string): ComponentFixture<TestComponent> {
  return TestBed.overrideComponent(TestComponent, { set: { template } }).createComponent(TestComponent);
}
