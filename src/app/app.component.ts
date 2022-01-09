import { Component } from '@angular/core';
import { IUser } from './interfaces/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: IUser = {} as IUser;

  loadUser() {
    this.user = {
      age: 25,
      name: 'Joao',
      status: true
    }
  }

  onAgeIncremented() {
    this.user.age = this.user.age + 1;
  }
}
