import { Component, OnInit } from '@angular/core';
import {Service1Service} from '../Services/service1.service'
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
 
  products = {};
  usersData = {};
  
 // constructor() { }
 
//dependency injection
  //Injected the service into constructor
  //step 3: 
  constructor(private objService: Service1Service, private objUser: UserService) { }

  ngOnInit() {
    //const objService = new Service1Service();
    //this.products= objService.products;
    //above line is also working but we are calling from DI
   this.products= this.objService.products;

   var obj=this.objUser.getUsers();    

   obj.subscribe(res => {
    this.usersData=res;
    console.log(res )
   });


 //with observever
  //  this.objUser.getUsers().subscribe(res => {
  //   console.log('Getting data from api',res)
  //  })
  }
  // Hello(){
  //   alert('Hello all!!');
  // }
 
  hello() {
    //created object of service
    //const objService = new Service1Service();
    //objService.hello();

    //above line is also working but we are calling from DI
    this.objService.hello();
  }
}
