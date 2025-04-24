import { Component, inject } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import { AddCharacterFormComponent } from '../../components/dragonball/add-character-form/add-character-form.component';
import { DragonballService } from '../../services/dragonball.service';

@Component({
  templateUrl: './dragonball-super-page.component.html',
  selector: 'dragonball-super',
  imports: [CharacterListComponent, AddCharacterFormComponent],
})
export class DragonballSuperPageComponent {
  // Ejemplos de inyeccion de dependencias para los servicios
  // constructor(
  //   public dragonballService: DragonballService
  // ){}

  public dragonballService = inject(DragonballService);
}
