import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Rick Sanchez' },
      { id: 12, name: 'Mr. Poopybutthole' },
      { id: 13, name: 'Birdperson' },
      { id: 14, name: 'Morty Smith' },
      { id: 15, name: 'Squanchy' },
      { id: 16, name: 'Mr. Meeseeks' },
      { id: 17, name: 'Abradolf Lincler' },
      { id: 18, name: 'Noob Noob' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
