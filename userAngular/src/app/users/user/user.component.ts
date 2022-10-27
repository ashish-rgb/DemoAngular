import { Component, OnInit } from '@angular/core';
import { UsersService } from'src/app/shared/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  //DI : Constructor Injection
  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
    
  }

}
