import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from 'src/app/shared/users.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-entry',
  templateUrl: './user-entry.component.html',
  styleUrls: ['./user-entry.component.scss']
})
export class UserEntryComponent implements OnInit {

fullName:string="Faith Infotech";

  constructor(public usersService : UsersService,
    private toastrService: ToastrService) { }

  //life cycle hook
  ngOnInit(): void {
    //get all roles for dropdown list
    this.usersService.bindGetAllRoles();
  }

  //submit
  onSubmit(form: NgForm){
    console.log(form.value);
    //INSERT =0 or UPDATE >=1
    let insertId=this.usersService.formUserData.userId;

    //checking for Insert or Update 
    if(insertId==0 || insertId==null){
      //INSERT
      this.insertUserRecord(form);
    }else{
      //UPDATE
      this.updateUserRecord(form);
    }
  }

  //Insert method
  insertUserRecord(form?:NgForm){
    console.log("Inserting a record");
    console.log(form.value);
    this.usersService.insertUser(form.value).subscribe(
      (result)=>{
        console.log(result);
        this.toastrService.success("User record has been inserted",'UserApp v2022');
        window.location.reload();
      }
    );
  }

  //Update method
  updateUserRecord(form?:NgForm){
    console.log("Updating a record");
    console.log(form.value);
    this.usersService.updateUser(form.value).subscribe(
      (result)=>{
        console.log(result);
        this.toastrService.success("User record has been updated",'UserApp v2022');
        //window.location.reload();
      }
    );
  }
}
