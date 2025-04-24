import { Component, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import { Character } from '../../interfaces/character.interface';
import { AddCharacterFormComponent } from '../../components/dragonball/add-character-form/add-character-form.component';

@Component({
  templateUrl: './dragonball-super-page.component.html',
  selector: 'dragonball-super',
  imports: [CharacterListComponent, AddCharacterFormComponent],
})
export class DragonballSuperPageComponent {
  characters = signal<Character[]>([
    { id: 4, name: 'Yeyo', power: 10000 },
    { id: 3, name: 'Gohan', power: 1100 },
  ]);

  addNewCharacter(character: Character){
    this.characters.update(
      (list) => [...list, character]
    )
  }
}
