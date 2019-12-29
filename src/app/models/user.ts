import { Time } from '@angular/common';
import { NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';

export class User {
  public user_id: number;
  public username: String;
  public role: String;
  constructor(
  ){}

  public setEmpty(){
    this.user_id = null;
    this.username = null;
    this.role = null;
  }

}
