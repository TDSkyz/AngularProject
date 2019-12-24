import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingService } from './services/booking.service';
import { BookingDashboardComponent } from './components/admin/booking-dashboard/booking-dashboard.component';
import { NgbDateCustomParserFormatter} from './utils/dateformat';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    BookingDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [BookingService, {provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter}],
  bootstrap: [AppComponent]
})
export class AppModule { }
