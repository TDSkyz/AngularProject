import { Time } from '@angular/common';
import { NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';

export class Booking {
  public field_id: number;
  public date: NgbDateStruct;
  public booking_id: number;
  public time: NgbTimeStruct;
  public user_id: number;
  
  constructor(
  ){}
  public dateToString(): string{
		return this.date.day + '/' + this.date.month + '/' + this.date.year
  }
  public timeToString(): string{
		return this.time.hour + ':' + this.time.minute
  }
  public setEmpty(){
    this.field_id= null;
    this.date= null;
    this.booking_id= null;
    this.time= null;
    this.user_id= null;
  }
  public stringToDate(stringDate: string): NgbDateStruct{
    var element = stringDate.split("/", 3);
    return {
      year: Number(element[2]),
      month: Number(element[1]),
      day: Number(element[0])
    }
  }

  public stringToTime(stringTime: string): NgbTimeStruct{
    var element = stringTime.split(":", 2);
    return {
      hour: Number(element[0]),
      minute: Number(element[1]),
      second: 0
    }
  }
}
