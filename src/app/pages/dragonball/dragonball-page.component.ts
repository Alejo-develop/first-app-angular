import { Component, signal } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  templateUrl: './dragonball-page.component.html',
})
export class DragonballPageComponent {
  name = signal('Krilin');
  power = signal(600);

  characters = signal<Character[]>([
    { id: 4, name: 'Yeyo', power: 10000 },
    { id: 3, name: 'Gohan', power: 1100 },
    { id: 5, name: 'Jero', power: 10 },
    { id: 2, name: 'Vegeta', power: 900 },
    { id: 1, name: 'Goku', power: 1000 },
  ]);

  addCharacter() {
    if (!this.name() || !this.name() || this.power() < 0) {
      return;
    }

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };

    this.characters.update((list) => [...list, newCharacter]);

    this.resetForm();
    return;
  }

  resetForm() {
    this.name.set('');
    this.power.set(0);
  }
}
