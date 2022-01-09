import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../interfaces/user.interface';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  @Input('user') user: IUser = {} as IUser;
  @Output('incrementAgeEmit') incrementAgeEmit = new EventEmitter<void>();

  incrementAge() {
    this.incrementAgeEmit.emit();
  }
}
