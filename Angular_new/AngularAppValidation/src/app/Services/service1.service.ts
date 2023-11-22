import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  products = [

    { name: 'laptop', id: '101'},

    { name: 'Mobile', id: '102'},

    { name: 'TV', id: '103'},

    { name: 'TAB', id: '104'},

    { name: 'TAB1', id: '105'},

  ]
  constructor() { }
  hello()
  {
    alert('Hello all');
  }

  public birthdate: Date;
  public age: number;
  public CalculateAge(birthdate,age): number
  {
      if(birthdate){
        console.log(birthdate)
        var date = new Date(birthdate);
        console.log(date);
        //  var timeDiff = Math.abs(Date.now() - this.birthdate.getTime());
        var timeDiff = Math.abs(Date.now() - date.getTime());
        console.log(timeDiff);
         //Used Math.floor instead of Math.ceil
         //so 26 years and 140 days would be considered as 26, not 27.
         this.age = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
         console.log(this.age);
         return age;
     }
    }

  
  //calculator

}
 