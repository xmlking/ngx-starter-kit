import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clap-button',
  template: `
    <ngx-clap
      [totalCounter]="totalCounter"
      [userCounter]="userCounter"
      (userCounterChange)="userCounter = userCounter + 1"
    >
    </ngx-clap>
  `,
  styles: [
    `
      :host {
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `
  ]
})
export class ClapButtonComponent {
  userCounter = 0;

  get totalCounter() {
    return this.userCounter + 1000;
  }
}
