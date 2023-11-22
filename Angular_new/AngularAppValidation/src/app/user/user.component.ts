import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  url = 'https://jsonplaceholder.typicode.com/users'
//Inject this HttpClient
  constructor(private _userServiceObj : UserService) { }

  ngOnInit() {
    this._userServiceObj.getUsers().subscribe(res => {
      console.log('from user component', res);
    })
  }

}
