import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent implements OnInit {
  @Input() user_name: string = ""
  @Input() user_info!: {email: string, age: number};
  @Input() user_spell: string = "fire ball"

  constructor() { }

  ngOnInit(): void {
  }

}
