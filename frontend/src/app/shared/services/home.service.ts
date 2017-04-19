import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import "rxjs/Rx";

@Injectable()
export class HomeService {

  constructor(private http: Http) {}


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
