import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  // Holds returning data
  users$: any;

  constructor(private data: DataService) { }

  ngOnInit() {
    // Code runs in here when component loads
    this.data.getUsers().subscribe (
      data => this.users$ = data
    );
  }

}
