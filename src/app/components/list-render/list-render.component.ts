import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/interfaces/Animal';
import { ListService } from 'src/app/services/list.service';

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

  constructor(private listService: ListService) { }

  ngOnInit(): void {
  }


  showAge(animal: Animal):void{
    this.animalDetails = `O animal ${animal.name} tem ${animal.age} anos`;
  }

  removeAnimal(animail: Animal)
  {
    this.animals = this.listService.remove(this.animals, animail);
  }
}
