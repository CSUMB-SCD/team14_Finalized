import { ItemsService } from './../items.service';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Item } from '../items';

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

  removeItem(item: Item) {
    // tslint:disable-next-line:prefer-const
    let newCart: Item[] = [];

    for (const itm of this.userSVC.mainUser.cart) {
      if (item.id !== itm.id) {
        newCart.push(itm);
      }
    }
    this.userSVC.mainUser.cart = newCart;
    this.userSVC.updateUser(this.userSVC.mainUser).subscribe(data => {console.log(data); });
    alert('Item Removed');
  }
}
