import { ItemsService } from './../items.service';
import { Component, OnInit } from '@angular/core';
import { Item } from '../items';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  allItems: Item[];
  constructor(private itemsvc: ItemsService) {
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

}
