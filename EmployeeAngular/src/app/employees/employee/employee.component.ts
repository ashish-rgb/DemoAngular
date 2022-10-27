import { Component, OnInit } from '@angular/core';
import { EmployeesService } from'src/app/shared/employees.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeesService:EmployeesService) { }

  ngOnInit(): void {
  }

}
