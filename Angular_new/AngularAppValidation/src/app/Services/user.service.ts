import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //step 1
  //UserService depend hai HttpClient pe
  constructor(private httpClient: HttpClient) { }

  //step 2
  url='https://jsonplaceholder.typicode.com/users';

  getUsers(){
    return this.httpClient.get(this.url);
  }
}
