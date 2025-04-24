import { Component, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-add-character-form',
  templateUrl: './add-Character-form.component.html',
})
export class AddCharacterFormComponent {
  name = signal('');
  power = signal(0);

  newCharacter = output<Character>()
  addCharacter() {
    if (!this.name() || !this.name() || this.power() < 0) {
      return;
    }

    const newCharacter: Character = {
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      power: this.power(),
    };

    this.newCharacter.emit(newCharacter)
    this.resetForm();
    return;
  }

  resetForm() {
    this.name.set('');
    this.power.set(0);
  }
}
