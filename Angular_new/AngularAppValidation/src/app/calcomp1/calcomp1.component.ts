import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Service1Service } from '../Services/service1.service';

@Component({
  selector: 'app-calcomp1',
  templateUrl: './calcomp1.component.html',
  styleUrls: ['./calcomp1.component.css']
})
export class Calcomp1Component implements OnInit {
  public birthdate: Date;
  public age: number;

  myForm: FormGroup;
  isFormSubmitted: boolean = false;
  //constructor() { }
  constructor(private objService: Service1Service) { }

  ngOnInit() {
     }
  

  public CalculateAge(): void
  {
    this.objService.CalculateAge(this.birthdate,this.age);
    //this.age=this.objService.CalculateAge(this.birthdate,this.age);
    console.log('getting age from servie: ',this.objService.age);
    this.age=this.objService.age;
    console.log('getting age from comp1: ',this.objService.age);
    //   if(this.birthdate){
    //     console.log(this.birthdate)
    //     var date = new Date(this.birthdate);
    //     console.log(date);
    //     //  var timeDiff = Math.abs(Date.now() - this.birthdate.getTime());
    //     var timeDiff = Math.abs(Date.now() - date.getTime());
    //     console.log(timeDiff);
    //      //Used Math.floor instead of Math.ceil
    //      //so 26 years and 140 days would be considered as 26, not 27.
    //      this.age = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
    //      console.log(this.age);
    //  }
    }

  // createForm() {

  //   this.myForm = new FormGroup({
  //     'dob': new FormControl(null, [Validators.required])      
  //   })

  //}

  // OnSubmit() {
  //   if (this.myForm.valid) {
  //     this.isFormSubmitted = true;
  //     console.log('Submit method called', this.myForm);
  //     console.log('Forms value', this.myForm.value);
  //   }

  // }
}
