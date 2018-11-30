import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private userSVC: UsersService) {
    console.log(userSVC.mainUser.userName + ' ' + userSVC.mainUser.password);
  }

  ngOnInit() {
  }

}
