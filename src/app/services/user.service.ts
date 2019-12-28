import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Time } from '@angular/common';
import { User } from '../models/user';

const API_URL = 'http://210.211.116.133:6969';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [];
  constructor(
    public http: HttpClient
  ) { }

  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${API_URL}/users`);
  }

  getUserById(user_id: Object): Observable<User>{
    return this.http.get<User>(`${API_URL}/users/${user_id}`)
  }

  add(user: User): Observable<User> {
    let userpassword = "123456";
		return this.http.post<User>(`${API_URL}/user/create`, {
      username: user.username,
      password: userpassword
		});
	}

	update(user: User): Observable<User> {
		return this.http.put<User>(`${API_URL}/user/${user.user_id}`, {
      username: user.username,
		});
	}

	delete(user_id: number): Observable<User> {
		return this.http.delete<User>(`${API_URL}/user/${user_id}`);
	}
}
