import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styles: `
    button{
      padding: 5px;
      margin: 5px 10px;
      width: 75px;
    }
  `,
  /*Propiedad para cambiar la libreria para detectar los cambios
    de ZoneJs a Zoneless, para esta ultima se utilizan las señales
    
    changeDetection: ChangeDetectionStrategy.OnPush,
    */
})
export class CounterPageComponent {
  counter = 0;
  counterSignal = signal(0);

  /* Una manera de manejar las señales*/
  // constructor() {
  //   setInterval(() => {
  //     this.counterSignal.update((c) => c + 1);
  //   }, 2000);
  // }

  increaseBy(value: number) {
    this.counter += value;
    this.counterSignal.update((current) => current + value);
  }

  resetCounter() {
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
