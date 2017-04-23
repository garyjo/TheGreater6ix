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
    let cities: Array<any> = [];
    this.http.get("/api/cities")
    .map(result => result.json())
    .flatMap(result => result.results)
    .subscribe(
      result => {
        cities.push(result);
      },
      error => {
        console.error(error);
      }
    );
  return cities;
  }
}
