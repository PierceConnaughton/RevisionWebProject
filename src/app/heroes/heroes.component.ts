import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import { HeroService } from "../hero.service";
//import { MessageService } from "../message.service";


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
  
})


export class HeroesComponent implements OnInit {

  
  
  heroes: Hero[];

  //selectedHero: Hero;

  //When Angular creates a HeroesComponent, the Dependency Injection
  //system sets the heroService parameter to a single instance 
  //of HeroService.
  constructor(private heroService: HeroService) { }

/* get heroes method. 
   The original version assigns an array of heroes
   to the component's heroes property. The assignment occurs synchronously,
   as if the server could return heroes instantly or the browser could
   freeze the UI while it waited for the server's response.

   That won't work when the HeroService is actually making requests 
   of a remote server

   The new version waits for the Observable to emit the array of 
   heroes—which could happen now or several minutes from now. 
   The subscribe() method passes the emitted array to the callback, 
   which sets the component's heroes property.

   This asynchronous approach will work when the HeroService requests 
   heroes from the server.
*/

  getHeroes(): void{
    //this.heroes = this.heroService.getHeroes(); original
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
    
  //each time a hero is selcted add a message

  //onSelect(hero: Hero): void {
     // this.selectedHero = hero;
      //this.messageService.add('HeroesComponent: Selected hero id=${hero.id}')
  //}

  //call getHeroes() inside the ngOnInit lifecycle hook and 
  //let Angular call ngOnInit() at an appropriate time after 
  //constructing a HeroesComponent instance
  ngOnInit(): void {
    this.getHeroes();
  }

 

  
  
  
    

}
