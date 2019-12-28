import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Time } from '@angular/common';
import { Field } from '../models/field';

const API_URL = 'http://210.211.116.133:6969';
@Injectable({
  providedIn: 'root'
})
export class FieldService {

  fields: Field[] = [];
  constructor(
    public http: HttpClient
  ) { }

  getAllFields(): Observable<Field[]>{
    return this.http.get<Field[]>(`${API_URL}/fields`);
  }

  getFieldById(field_id: Object): Observable<Field>{
    return this.http.get<Field>(`${API_URL}/field/${field_id}`)
  }

  add(field: Field): Observable<Field> {
		return this.http.post<Field>(`${API_URL}/field/create`, {
      field_id: field.field_id,
      fieldname: field.fieldname,
      price: field.price
		});
	}

	update(field: Field): Observable<Field> {
		return this.http.put<Field>(`${API_URL}/field/${field.field_id}`, {
      fieldname: field.fieldname,
      price: field.price
		});
	}

	delete(field_id: number): Observable<Field> {
		return this.http.delete<Field>(`${API_URL}/field/${field_id}`);
	}
}
