import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/shared/employees.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  constructor(public employeesService:EmployeesService) { }

  ngOnInit(): void {
    console.log("Welcome Life Cycle Hook");
    //testing 
    //this.getAllEmployeesList();
    this.employeesService.bindGetAllEmployeesList();
  }

  //subscrice getAllEmployees
  getAllEmployeesList(){
    //call service
    this.employeesService.getAllEmployees().subscribe(
      (response) => {
        console.log("Retrieving from List");
        console.log(response);
      },
      (error) => {
        console.log('something wrong');
        console.log(error);
      }
    );
  }


}
