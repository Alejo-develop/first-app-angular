import { UpperCasePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';

@Component({
  templateUrl: './hero-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [UpperCasePipe],
})
export class HeroPageComponent {
  name = signal('Ironman');
  age = signal(45);

  /*
    Señal computaricada
    heroDescription = computed(() => `${this.name()} - ${this.age()}`)
  */

  getHeroDescription() {
    return `${this.name()} - ${this.age()}`;
  }

  changeHero() {
    this.name.update((currentName) => (currentName = 'Spiderman'));
    this.age.update((currentAge) => (currentAge = 22));
  }

  changeAge() {
    this.age.update((currentAge) => (currentAge = 60));
  }

  resetForm() {
    this.name.update((currentName) => (currentName = 'Ironman'));
    this.age.update((currentAge) => (currentAge = 45));
  }
}
