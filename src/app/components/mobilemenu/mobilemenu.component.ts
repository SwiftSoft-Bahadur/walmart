import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobilemenu',
  templateUrl: './mobilemenu.component.html',
  styleUrls: ['./mobilemenu.component.css']
})
export class MobilemenuComponent implements OnInit {

  navlinks = [
    {
      link: 'shop-fullwidth-banner.html',
      icon: 'w-icon-tshirt2',
      name:'Healthy & Beauty'
    },
    {
      link: 'shop-fullwidth-banner.html',
      icon: 'w-icon-heartbeat',
      name:'Gift Ideas'
    },
    {
      link: 'shop-fullwidth-banner.html',
      icon: 'w-icon-home',
      name:'Toy & Games'
    },
    {
      link: 'shop-fullwidth-banner.html',
      icon: 'w-icon-gift',
      name:'Cooking'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
