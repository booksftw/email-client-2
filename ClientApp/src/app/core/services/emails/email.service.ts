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
    let testRes = this.http.get("http://localhost:3000/yo");
    return testRes;
    // return "Howdy backend results";
  }
}
