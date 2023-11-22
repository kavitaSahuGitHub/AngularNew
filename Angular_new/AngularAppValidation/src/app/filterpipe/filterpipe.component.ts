import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filterpipe',
  templateUrl: './filterpipe.component.html',
  styleUrls: ['./filterpipe.component.css']
})
export class FilterpipeComponent implements OnInit {
  namesearch: string= "";
  productArr: any[] = [
    {
      prodNo: 1,
      productName: 'Mobile',
      productPrice: '50000 RS',
      availablity: 'Available'
    },
    {
      prodNo: 2,
      productName: 'TV',
      productPrice: '150000 RS',
      availablity: 'Available'
    },
    {
      prodNo: 3,
      productName: 'Washing Machine',
      productPrice: '150000 RS',
      availablity: 'Not Available'
    },
    {
      prodNo: 4,
      productName: 'Tab',
      productPrice: '90000 RS',
      availablity: 'Available'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
