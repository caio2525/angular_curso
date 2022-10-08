import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/interfaces/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  animals: Array<Animal> = [
    {
      name: 'tom',
      tipo: 'pitbull',
      age: 1,
    },
    {
      name: 'helga',
      tipo: 'bulldog',
      age: 8,
    },
    {
      name: 'hilda',
      tipo: 'german shepherd',
      age: 5,
    },
  ];

  animalDetails: string = '';

  constructor() { }

  ngOnInit(): void {
  }


  showAge(animal: Animal):void{
    this.animalDetails = `O animal ${animal.name} tem ${animal.age} anos`;
  }
}
