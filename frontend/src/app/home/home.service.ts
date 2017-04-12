import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import "rxjs/Rx";

@Injectable()
export class HomeService {

  constructor(private http: Http) {}


  VilleInit():Array<any>{
    let villes: Array<any> = [];
    this.http.get("http://SomeRandomWebsite.com/thisDataBase")
    .map(result => result.json())
    .flatMap(result => result.results)
    .subscribe(
      result => {
        villes.push(result);
      },
      error => {
        console.error(error);
      }
    );
  return villes;
  }
}
