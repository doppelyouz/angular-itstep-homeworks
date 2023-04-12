import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { UserInterface } from '../types/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserAllowanceService {
  constructor(private dataService: DataService) {}

  getUsers(): UserInterface[] {
    return this.dataService.getUsers();
  }

  getUserByName(name: string): UserInterface | undefined {
    return this.getUsers().find((user) => user.name === name);
  }

  isOlderThan21(user: UserInterface): boolean {
    return user.age >= 21;
  }
}
