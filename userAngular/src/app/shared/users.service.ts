import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Role } from './role';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

//global variable : create an object of user
formUserData:User = new User();

//list all users --retrieve all records
users:User[] //all users
roles:Role[]

  constructor(private httpClient:HttpClient) { }

//call rest api
// 1Get all users
getAllUsers() : Observable<any>{
  //http://localhost:9095/api/users
  return this.httpClient.get(environment.apiUrl + '/api/users');
}

//2 Retrieve all users for listing
bindGetAllUsersList(){
  this.httpClient.get(environment.apiUrl + '/api/users')
  .toPromise()
  .then(
    (response) => {
      console.log(response);
      this.users = response as User[]
    },
  );
}

//3 GET all roles for binding
bindGetAllRoles(){
  this.httpClient.get(environment.apiUrl + "/api/roles")
  .toPromise()
  .then(
    data=>{
      console.log(data);
      this.roles=data as Role[]
    }
  );
}

//4- INSERT
insertUser(user:User): Observable<any>{
  return this.httpClient.post(environment.apiUrl + '/api/users',user);
}

//5- Update
updateUser(user:User): Observable<any>{
  return this.httpClient.put(environment.apiUrl + '/api/users',user);
}
//6- DELETE
deleteUser(id:number){
  return this.httpClient.delete(environment.apiUrl + "/api/users/" + id);
}

}
