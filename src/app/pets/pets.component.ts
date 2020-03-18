import { Component, OnInit } from "@angular/core";

import { Pet } from "../pet";
import { PetsService } from "../pets.service";
import { MessageService } from '../message.service';

@Component({
  selector: "app-pets",
  templateUrl: "./pets.component.html",
  styleUrls: ["./pets.component.css"]
})
export class PetsComponent implements OnInit {
  selectedPet: Pet;
  pets: Pet[];
  constructor(private petService: PetsService, private messageService: MessageService) {}

  ngOnInit() {
    this.getPets();
  }

  getPets(): void {
    this.petService.getPets()
      .subscribe(pet => this.pets = pet);
  }

  onSelect(pet: Pet): void {
    this.selectedPet = pet;
    this.messageService.add(`PetService: Selected pet id=${pet.id}`);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.petService.addPet({ name } as Pet).subscribe(pet => {
      this.pets.push(pet);
    });
  }

  delete(pet: Pet): void {
    this.pets = this.pets.filter(p => p !== pet);
    this.petService.deletePet(pet).subscribe();
  }
}
