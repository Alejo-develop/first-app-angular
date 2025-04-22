import { Component } from '@angular/core';

@Component({
  template: /*html*/ `
    <h1>Hola mundo</h1>
    <h2>Counter: {{ counter }}</h2>
    <h2>Suma uno perrita</h2>
    <button (click)="increaseBy(1)">+1</button>
  `,
})
export class CounterPageComponent {
  counter = 10;

  increaseBy(value: number) {
    this.counter += value;
  }
}
