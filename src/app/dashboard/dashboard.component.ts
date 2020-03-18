import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Pet } from "../pet";
import { PetsService } from "../pets.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  pets: Pet[] = [];

  constructor(private heroService: HeroService,
                        private petsService: PetsService) { }

  ngOnInit() {
    this.getHeroes();
    this.getPets();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
  getPets(): void {
    this.petsService.getPets()
      .subscribe(pets => this.pets = pets.slice(1, 5));
  }
}