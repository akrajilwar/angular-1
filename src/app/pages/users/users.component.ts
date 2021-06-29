import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: any = [];
  baseUrl = environment.baseUrl;

  user: any;
  histories: any = [];

  constructor(
    private router: Router,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.apiService.getUsers().subscribe(data => {
      this.users = data;
      this.getHistory(data[0]);
    }, err => console.error(err))
  }

  convertDate(date: string) {
    return new Date(date).toLocaleString();
  }

  getHistory(user: any) {
    this.user = user;
    this.apiService.getHistories(user._id)
      .subscribe(data => {
        this.histories = data;
      }, err => console.log(err));
  }

}
