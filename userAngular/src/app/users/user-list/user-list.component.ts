import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/user';
import { UsersService } from 'src/app/shared/users.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  //assign default page
  page: number=1;
  filter: string='';

  constructor(public usersService : UsersService,
    private toastrService: ToastrService) { }

  //life-cycle hook  -- Initialize
  ngOnInit(): void {
    console.log("Welcome Life Cycle Hook");
    //testing 
    //this.getAllUsersList();
    this.usersService.bindGetAllUsersList();
  }

    //subscrice getAllUsers
    getAllUsersList(){
      //call service
      this.usersService.getAllUsers().subscribe(
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

    //Update a User
    updateUser(userId : number){
      console.log(userId);
      //this.usersService.formUserData=
    }

    //Delete a User
    deleteUser(userId : number){
      console.log("Deleting a record...");
      if(confirm('Are you sure to DELETE this record?')){
        this.usersService.deleteUser(userId).subscribe(
          (result)=> {
            console.log(result);
            this.toastrService.error("Record has been DELETED successfully",'UserApp v2022');
            this.usersService.bindGetAllUsersList();
          },
          (error)=>{
            console.log(error);
          }
        );
      }
    }

  
    //Populate User Form for edit
    populateForm(user: User){
      console.log(user);
      this.usersService.formUserData=Object.assign({},user)
    }
}
