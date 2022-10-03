import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Caio';
  age: number = 24;
  hobbies: Array<string> = ['Ler', 'Estudar'];
  car = {
    year: 2018,
    plate: 'ado128',
  };

  size: Number = 40;
  color: string = 'green';
  classes = ["small-title", "green-title"];
  underline = "underline-text";
  


  constructor() { }

  ngOnInit(): void {
  }

}
