import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  new_user: User;
  allUsers: User[]; // Testing: Checking Registered user

  constructor(private userSVC: UsersService, private router: Router) {
    this.userSVC.getAllUsers().subscribe(data => {
      this.allUsers = data;
      console.log(data);
    });
  }

  ngOnInit() {
  }

  register_user(event) {
    event.preventDefault();
    const target = event.target;
    const passed_in_un = target.querySelector('#username').value;
    const passed_in_pw = target.querySelector('#password').value;

    this.userSVC.createUser(passed_in_un, passed_in_pw).subscribe();

    // Press Option + Command + i (Access Tools for debugging in Chrome)
    console.log('Username: ', passed_in_un, 'Password: ', passed_in_pw);
    // console.log('Valid: ', this.is_login_valid);

    this.router.navigate(['/signin']);
  }

}
