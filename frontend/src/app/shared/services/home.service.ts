import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import "rxjs/Rx";
import { City } from "../interfaces/city";

@Injectable()
export class HomeService {
  cities:City[];

  constructor(private http: Http) {
    this.cities=[];
  }

  homeInit():Array<any>{
    this.http.get("/api/cities")
    .map(result => result.json())
    .subscribe(
      result => {
        console.log(result)
        this.cities.push(result);
      },
      error => {
        console.error(error);
      }
    );
  return this.cities;
  }
}
