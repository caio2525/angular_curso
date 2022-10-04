import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-render-condicional',
  templateUrl: './render-condicional.component.html',
  styleUrls: ['./render-condicional.component.css']
})
export class RenderCondicionalComponent implements OnInit {
  canShow: boolean = true;
  name: string = "caio";

  constructor() { }

  ngOnInit(): void {
  }

}
