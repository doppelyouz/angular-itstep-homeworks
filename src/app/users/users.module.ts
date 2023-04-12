import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { RouterModule, Routes } from '@angular/router';
import { FilterByNamePipe } from '../pipes/filterByName.pipe';
import { SortByAgePipe } from '../pipes/filterByAge.pipe';

const routes: Routes = [
  {
      path: 'users',
      component: UsersComponent
  },
]

@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    FilterByNamePipe,
    SortByAgePipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class UsersModule { }
