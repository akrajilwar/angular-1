import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  baseUrl = environment.baseUrl;
  user: any;

  histories: any = [];

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user')!);

    this.getHistory();
  }

  convertDate(date: string) {
    return new Date(date).toLocaleString();
  }

  getHistory() {
    this.apiService.getHistories(this.user._id)
      .subscribe(data => {
        this.histories = data;
      }, err => console.log(err));
  }

}
