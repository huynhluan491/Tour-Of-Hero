import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './HeroList';
import { MessageService } from './message.service';

@Injectable({
    providedIn: 'root',
})
export class HeroService {
    constructor(private messageService: MessageService) {}

    getHeroes(): Observable<Hero[]> {
        const heroes = of(HEROES);
        this.messageService.add('HeroService: fetched heroes');
        return heroes;
    }

    getHero(id: number): Observable<Hero> {
        const hero = HEROES.find((hr) => hr.id == id)!;
        this.messageService.add(`found hero with id of ${id}`);
        return of(hero);
    }
}
