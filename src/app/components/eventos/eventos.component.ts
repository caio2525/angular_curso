import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  showMessage: boolean = false;
  numero: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  toogleShowMessage(): void{
    this.showMessage = !this.showMessage;
  }

  onChangeNumber(): any {
    console.log('Parent function onChangeNumber');
    console.log('numero', this.numero)
    //this.numero = 20;
    this.numero = Math.floor(Math.random() * 10); 
  }


}
