import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero }         from '../hero';
import { HeroService }  from '../hero.service';
import {Pet } from '../pet';
import { PetsService} from '../pets.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  @Input() pet: Pet;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private petService: PetsService
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  getPet(): void {
    const idPet = +this.route.snapshot.paramMap.get('idPet');
    this.petService.getPet(idPet)
      .subscribe(pet => this.pet = pet);
  }

  goBack(): void {
    this.location.back();
  }

  savePet() : void{
   this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
  choosePet(){
    this.heroService.updateHero(this.pet)
      .subscribe(pet => this.pet = pet);
  }
 save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
}