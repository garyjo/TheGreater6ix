import { Component,OnInit } from '@angular/core';
import { HomeService } from '../shared/services/home.service';
import { City } from "../shared/interfaces/city";

@Component({
  selector: 'home-page',
  styleUrls:['home.component.css'],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit{

public cities: City[];

  constructor(private homeService:HomeService){
  // constructor(){
    this.cities = [];
  }

  ngOnInit(){
    this.cities = this.homeService.homeInit();
    // console.log("ngOnInit");
  }
}
