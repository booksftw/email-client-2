import { Component, OnInit } from '@angular/core';
import { EmailService } from '../core/services/emails/email.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  backendEmailTest: string = "Not updated yet with backend res";

  constructor(private emailService: EmailService) { }

  ngOnInit() {
    let x = this.emailService.getTest(); // !

    console.log(x);
    x.subscribe(r => {
      console.log('yo r', r);
    })
  }

}
