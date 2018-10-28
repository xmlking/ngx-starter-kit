import { Component, OnInit } from '@angular/core';
import { Crumb } from '@ngx-starter-kit/breadcrumbs';

@Component({
  selector: 'app-clap-button',
  template: `
    <ngx-breadcrumbs title="Micro Interactions" [crumbs]="crumbs"></ngx-breadcrumbs>
    <div class="container">
      <ngx-clap
        [totalCounter]="totalCounter"
        [userCounter]="userCounter"
        (userCounterChange)="userCounter = userCounter + 1"
      >
      </ngx-clap>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        padding: 1.5%;
        position: relative;
      }
      .container {
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `,
  ],
})
export class ClapButtonComponent {
  crumbs: ReadonlyArray<Crumb> = [
    { name: 'Dashboard', link: '/dashboard' },
    { name: 'Experiments', link: '/dashboard/experiments' },
    { name: 'Clap Button' },
  ];
  userCounter = 0;

  get totalCounter() {
    return this.userCounter + 1000;
  }
}
