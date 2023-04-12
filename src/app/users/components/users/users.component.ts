import { Component, OnInit } from '@angular/core';
import { users } from '../../users';
import { UserInterface } from '../../types/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{
  usersArray: UserInterface[] = []

  ngOnInit(): void {
    this.usersArray = users
  }
}
