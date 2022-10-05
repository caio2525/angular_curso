import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-correct-child-change-number',
  templateUrl: './correct-child-change-number.component.html',
  styleUrls: ['./correct-child-change-number.component.css']
})
export class CorrectChildChangeNumberComponent implements OnInit {
  @Output() onChangeNumber: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  changeNumber() {
    console.log('child change number')
    this.onChangeNumber.emit();
  }

}
