import { Component,OnInit } from '@angular/core';
// import { HomeService } from './home.service';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit{

public home: Array<any>;

  // constructor(private homeService:HomeService){
  constructor(){
    // this.home = [];
  }

  ngOnInit(){
    // this.home = this.homeService.homeInit();
    // console.log("ngOnInit");
  }
}
