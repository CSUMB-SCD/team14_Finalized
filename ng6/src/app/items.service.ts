import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './items';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private baseURL = 'https://springbootitemsdb.herokuapp.com/items';

  constructor(private http: HttpClient) { }

  getAllItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.baseURL + '/all');
  }

  updateItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.baseURL + '/update', item);
  }
}
