import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  is_login_valid: boolean;

  constructor() {
    this.is_login_valid = true;
  }

  ngOnInit() {

  }

  loginUser(event) {
    event.preventDefault();
    const target = event.target;
    const passed_in_un = target.querySelector('#username').value;
    const passed_in_pw = target.querySelector('#password').value;

    if (passed_in_un === 'admin' && passed_in_pw === 'admin') {
      this.is_login_valid = true;
    } else {
      this.is_login_valid = false;
    }

    // Press Option + Command + i (Access Tools for debugging in Chrome)
    console.log('Username: ', passed_in_un, 'Password: ', passed_in_pw);
    console.log('Valid: ', this.is_login_valid);
  }
}
