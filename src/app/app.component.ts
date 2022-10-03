import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name: string = 'Alucard';
  user_info: {email: string, age: number} = {email: 'alu@gmail.com', age: 300};
  
  title = 'primeiro-projeto';
}
