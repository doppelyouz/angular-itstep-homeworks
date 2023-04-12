import { Component } from '@angular/core';
import { UserAllowanceService } from '../../services/userAllowance.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  name: string = '';
  isAllowed: boolean = false;
  isShown: boolean = false

  constructor(private userAllowanceService: UserAllowanceService) {}

  checkAge() {
    this.isShown = true;
    const user = this.userAllowanceService.getUserByName(this.name);
    this.isAllowed = user ? this.userAllowanceService.isOlderThan21(user) : false;
  }
}
