import { Injectable } from '@angular/core';
import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";
import { Observable, of} from 'rxjs';
import { MessageService } from "./message.service";

//The @Injectable() decorator accepts a metadata object for the service, 
//the same way the @Component() decorator did for your component classes.
@Injectable({
  providedIn: 'root'
})
export class HeroService {

//method to return mock heroes
//of(HEROES) returns an Observable<Hero[]> that emits a single value, 
//the array of mock heroes.
getHeroes(): Observable<Hero[]> {
  //Send a message after the heroes are fetched from the database
  this.messageService.add('HeroService: fetched Heroes');
  return of (HEROES);
}

getHero(id: number): Observable<Hero>{
  //send the message after fetching the hero
  this.messageService.add('HeroService: fetched hero id=${id}');
  return of(HEROES.find(hero => hero.id === id));
}

//Angular will inject the single
//MessageService into that property when it creates the HeroService.
  constructor(private messageService: MessageService) { }
}
