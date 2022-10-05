import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-not-child-change-number',
  templateUrl: './child-change-number.component.html',
  styleUrls: ['./child-change-number.component.css']
})
export class ChildChangeNumberComponent implements OnInit {
  @Output() onChangeNumber: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  changeNumber() {
    this.onChangeNumber.emit();
  }

}
