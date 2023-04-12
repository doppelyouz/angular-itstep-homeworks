import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAgeComponent } from './components/user-age/user-age.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
      path: 'services',
      component: UserFormComponent
  },
]

@NgModule({
  declarations: [
    UserAgeComponent,
    UserFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class HomeworkServiceModule { }
