import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  passwordLength: number = 12;
  password: string = "";

  generate() {
    for (var i = 0; i <= this.passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * this.chars.length);
      this.password += this.chars.substring(randomNumber, randomNumber +1);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
