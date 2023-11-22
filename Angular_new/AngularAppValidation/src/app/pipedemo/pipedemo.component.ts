import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {
  

  //declaring variable
  todaysDate=new Date();
  price: number = 5000;
emp = [] =[
  {id: '1',name:'kavita'},
  {id: '2',name:'test'},
]
myObservable;

  constructor() { }

  ngOnInit() {
    this.myObservable = new Observable((observer)=> {
      console.log('my oberserable start')
      setTimeout(() => {
        observer.next('Ang class')
      },1000)
    })//.subscribe(res=> {
    //   console.log('after subscribe my custom observable',res)
    // })
  }

  
}
