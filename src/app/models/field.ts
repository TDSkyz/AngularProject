import { Time } from '@angular/common';
import { NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';

export class Field {
  public field_id: number;
  public fieldname: String;
  public price: Number;
  
  constructor(
  ){}

  public setEmpty(){
    this.field_id= null;
    this.fieldname = null;
    this.price = null;
  }

}
