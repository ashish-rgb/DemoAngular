import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  //global variable : create an object of employee
formEmployeeData:Employee = new Employee();

//list all employee --retrieve all records
employees:Employee[] //all users

  constructor(private httpClient:HttpClient) { }

//call rest api
// 1 Get all employee
getAllEmployees() : Observable<any>{
  //http://localhost:9096/api/employees
  return this.httpClient.get(environment.apiUrl + '/api/employees');
}

//2 Retrieve all users for listing
bindGetAllEmployeesList(){
  this.httpClient.get(environment.apiUrl + '/api/employees')
  .toPromise()
  .then(
    (response) => {
      console.log(response);
      this.employees = response as Employee[]
    },
  );
}

}
