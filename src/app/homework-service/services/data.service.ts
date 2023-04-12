import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private users = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 19 },
    { name: 'Bob', age: 30 },
    { name: 'Alice', age: 18 }
  ];

  getUsers() {
    return this.users;
  }

  getUserByName(name: string) {
    return this.users.find(user => user.name === name);
  }
}
