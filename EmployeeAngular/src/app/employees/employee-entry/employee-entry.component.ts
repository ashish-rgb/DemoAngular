import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeesService } from 'src/app/shared/employees.service';

@Component({
  selector: 'app-employee-entry',
  templateUrl: './employee-entry.component.html',
  styleUrls: ['./employee-entry.component.scss']
})
export class EmployeeEntryComponent implements OnInit {

  constructor(public employeesService:EmployeesService) { }

  ngOnInit(): void {
  }

  //submit
  onSubmit(form: NgForm){
    console.log(form.value);
}
}