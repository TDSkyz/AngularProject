import { Component, OnInit } from '@angular/core';
import { Booking } from './../../../models/booking'
import { BookingService } from './../../../services/booking.service'
import { Subscription } from 'rxjs'
import {NgbCalendar, NgbDateStruct, NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-booking-dashboard',
  templateUrl: './booking-dashboard.component.html',
  styleUrls: ['./booking-dashboard.component.css']
})

export class BookingDashboardComponent implements OnInit {
  bookingToAdd: Booking = new Booking();
  bookingToEdit: Booking = new Booking();
  today = this.calendar.getToday();
  public bookings: Booking[] = [];
  public subscription: Subscription;
  public bookingIDParam: number;
  userID: number;
  fieldID: number;
  // public userIDParam: number;
  constructor(
    private bookingService: BookingService,
    private calendar: NgbCalendar
  ) {}

  ngOnInit() {
    this.loadAllBookings();
  }

  loadAllBookings(){
    this.subscription = this.bookingService.getAllBookings().subscribe((bookings: Booking[]) => {
      this.bookings = bookings;
      this.bookings.sort((a, b) => (a.booking_id > b.booking_id) ? 1 : -1);
    });
  }
  
  addBooking(){
    console.log(this.bookingToAdd.date);
    this.subscription = this.bookingService.add(this.bookingToAdd).subscribe((message: Object) => {
      console.log(message);
      this.loadAllBookings();
    });
    
    this.bookingToAdd.setEmpty();
  }
  
  deleteBooking(id: number){
    var answer = window.confirm(`Delete Booking ID ${id} ??`)
    if (answer) {
      this.subscription = this.bookingService.delete(id).subscribe((message: Object) => {
        this.loadAllBookings();
      });
    }
  }
  
  passEditParams(booking: Booking){
    this.bookingToEdit.booking_id = booking.booking_id;
    this.bookingToEdit.user_id = booking.user_id;
    this.bookingToEdit.field_id = booking.field_id;
    this.bookingToEdit.date = this.bookingToEdit.stringToDate(String(booking.date));
    this.bookingToEdit.time = this.bookingToEdit.stringToTime(String(booking.time));
  }

  editBooking(){
    this.subscription = this.bookingService.update(this.bookingToEdit).subscribe((message: Object) => {
      console.log(message);
      this.loadAllBookings();
    });
  }

}
