//Routes tell the Router which view to display when a user clicks a 
//link or pastes a URL into the browser address bar.

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HeroesComponent } from "./heroes/heroes.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";

//First, AppRoutingModule imports RouterModule and Routes so the app 
//can have routing functionality. 
//The next import, HeroesComponent, will give the Router somewhere 
//to go once you configure the routes.


//A typical Angular Route has two properties:

//path: a string that matches the URL in the browser address bar.
//component: the component that the router should create when navigating to this route.

//This tells the router to match that URL to path: 'heroes' and 
//display the HeroesComponent when the URL is something like localhost:4200/heroes.
const routes:Routes = [
  {path: '',redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: 'heroes', component:HeroesComponent}
];

//The colon : in the path indicates that :id is a placeholder 
//for a specific hero id.

@NgModule({
imports: [ RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }


