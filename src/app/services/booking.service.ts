import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking} from './../models/booking'
import { Time } from '@angular/common';

const API_URL = 'http://210.211.116.133:6969';
@Injectable({
  providedIn: 'root'
})
export class BookingService {

  bookings: Booking[] = [];
  constructor(
    public http: HttpClient
  ) { }

  getAllBookings(): Observable<Booking[]>{
    return this.http.get<Booking[]>(`${API_URL}/bookings`);
  }

  getBookingById(booking_id: Object): Observable<Booking>{
    return this.http.get<Booking>(`${API_URL}/booking/${booking_id}`)
  }

  add(booking: Booking): Observable<Booking> {
		return this.http.post<Booking>(`${API_URL}/booking/create`, {
      user_id: booking.user_id,
      field_id: booking.field_id,
      date: booking.dateToString(),
      time: booking.timeToString(),
		});
	}

	update(booking: Booking): Observable<Booking> {
		return this.http.put<Booking>(`${API_URL}/booking/${booking.booking_id}`, {
			user_id: booking.user_id,
      field_id: booking.field_id,
      date: booking.dateToString(),
      time: booking.timeToString(),
		});
	}

	delete(booking_id: number): Observable<Booking> {
		return this.http.delete<Booking>(`${API_URL}/booking/${booking_id}`);
	}
}
