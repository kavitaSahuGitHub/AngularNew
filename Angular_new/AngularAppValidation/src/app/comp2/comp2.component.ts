import { Component, OnInit } from '@angular/core';
import {Service1Service} from '../Services/service1.service'

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  products = {};

  //constructor() { }

  //dependency injection
  //Injected the service into constructor
  constructor(private objService: Service1Service) { }

  ngOnInit() {
    //const objService = new Service1Service();
    //this.products=objService.products;
    //above line is also working but we are calling from DI
    this.products=this.objService.products;
  }
// Hello(){
//   alert('Hello all');
// }

Hello(){
  //created object of service
  //const objService = new Service1Service();
  //objService.hello();
  //above line is also working but we are calling from DI
  this.objService.hello();
}

sayHello()
{
 // const objService = new Service1Service();
 // console.log(objService);
 //above line is also working but we are calling from DI
   console.log(this.objService);
}
}
