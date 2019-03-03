import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
    <form class="example-form" (keydown.enter)="$event.preventDefault()">
      <mat-form-field class="example-full-width">
        <input matInput type="text" placeholder="Name" #hello (keyup)="0">
      </mat-form-field>
    </form>
    <p *ngIf="hello.value">
      Hello, {{hello.value}}
    </p>
  `
})

export class HelloComponent { }
