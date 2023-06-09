import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeliveryOrderModule } from './delivery-order/delivery-order.module';
import { TimetableModule } from './timetableOfClasses/timetable.module';
import { TopbarModule } from './shared/modules/topBar/topbar.module';
import { UsersModule } from './users/users.module';
import { HomeworkServiceModule } from './homework-service/homework-service.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DeliveryOrderModule,
    TimetableModule,
    TopbarModule,
    UsersModule,
    HomeworkServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
