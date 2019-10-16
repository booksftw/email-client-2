import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(
    private http: HttpClient
  ) { }

  getTest() {
    let testRes = this.http.get("yo");
    return testRes;
    // return "Howdy backend results";
  }
}
