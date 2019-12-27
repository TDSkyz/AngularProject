import { Component, OnInit } from '@angular/core';
import { Field } from 'src/app/models/field';
import { Subscription } from 'rxjs'
import { FieldService } from 'src/app/services/field.service';

@Component({
  selector: 'app-field-dashboard',
  templateUrl: './field-dashboard.component.html',
  styleUrls: ['./field-dashboard.component.css']
})
export class FieldDashboardComponent implements OnInit {
  fieldToAdd: Field = new Field();
  fieldToEdit: Field = new Field();
  public fields: Field[] = [];
  public subscription: Subscription;
  public fieldIDParam: number;

  constructor(
    private fieldService: FieldService,
  ) { }

  ngOnInit() {
    this.loadAllFields();
  }

  loadAllFields() {
    this.subscription = this.fieldService.getAllFields().subscribe((fields: Field[]) => {
      this.fields = fields;
      this.fields.sort((a, b) => (a.field_id > b.field_id) ? 1 : -1);
    });
  }

  addField(){
    this.subscription = this.fieldService.add(this.fieldToAdd).subscribe((message: Object) => {
      console.log(message);
      this.loadAllFields();
    });
    
    this.fieldToAdd.setEmpty();
  }

  deleteField(id: number){
    var answer = window.confirm(`Delete Field ID ${id} ??`)
    if (answer) {
      this.subscription = this.fieldService.delete(id).subscribe((message: Object) => {
        this.loadAllFields();
      });
    }
  }

  passEditParams(field: Field){
    this.fieldToEdit.field_id = field.field_id;
    this.fieldToEdit.fieldname = field.fieldname;
    this.fieldToEdit.price = field.price;
  }

  editField(){
    this.subscription = this.fieldService.update(this.fieldToEdit).subscribe((message: Object) => {
      console.log(message);
      this.loadAllFields();
    });
  }

}
