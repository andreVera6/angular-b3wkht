import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';
import { Pet } from './pet';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    return {heroes};
  }

  createrDb2() {
    const pets = [  { id: 111, name: 'Rio' },
      { id: 111, name: 'Zak' },
      { id: 112, name: 'Lusa' },
      { id: 113, name: 'Noori' },
      { id: 114, name: 'Petit' },
      { id: 115, name: 'Rio' },
      { id: 116, name: 'Lassie' },
      { id: 117, name: 'Neri' }];
      return {pets};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
  genIdPet(pets: Pet[]): number {
    return pets.length > 0 ? Math.max(...pets.map(pets => pets.id)) + 1 : 111;
  }
}