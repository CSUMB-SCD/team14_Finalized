import { ItemsService } from './../items.service';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(public userSVC: UsersService) {
    // console.log(userSVC.mainUser.cart.length);
  }

  ngOnInit() {
  }

}
