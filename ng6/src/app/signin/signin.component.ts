import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {

  }

  loginUser(event) {
    event.preventDefault();
    const target = event.target;
    const passed_in_un = target.querySelector('#username').value;
    const passed_in_pw = target.querySelector('#password').value;

    console.log(passed_in_un, passed_in_pw);
  }
}
