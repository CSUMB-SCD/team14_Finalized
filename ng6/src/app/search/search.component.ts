import { HttpClient } from '@angular/common/http';
import { ItemsService } from './../items.service';
import { Component, OnInit } from '@angular/core';
import { Item } from '../items';
import { UsersService } from '../users.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  allItems: Item[];
  constructor(private itemsvc: ItemsService, private userSVC: UsersService) {
    this.itemsvc.getAllItems().subscribe(data => {
      this.allItems = data;
      let a = 0;
      for (a; a < this.allItems.length; a++) {
        this.allItems[a].quant_arr = Array(this.allItems[a].stock).fill(1).map((x, i) => i + 1);
      }
    });
  }

  ngOnInit() {
  }

  addToCart(item: Item) {
    if (this.userSVC.mainUser != null) {
      const quant = $('#' + item.id).val();
      let updated =  false;
      for (const itm of this.userSVC.mainUser.cart) {
        if (itm.id === item.id) {
          item.stock = Number(quant);
          item.totalPrice = item.price * Number(quant);
          updated = true;
          break;
        }
      }

      if (!updated) {
        item.stock = Number(quant);
        item.totalPrice = item.price * Number(quant);
        this.userSVC.mainUser.cart.push(item);
      }
    } else {
      alert('Login - In To Add Items To Cart');
    }
  }

}
