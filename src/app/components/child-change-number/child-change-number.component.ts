import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-change-number',
  templateUrl: './child-change-number.component.html',
  styleUrls: ['./child-change-number.component.css']
})
export class ChildChangeNumberComponent implements OnInit {
  @Input() onChangeNumber: Function = () => {console.log('child function onChangeNumber')};
  numero: number = 10;
  constructor() { }

  ngOnInit(): void {
  }

}
