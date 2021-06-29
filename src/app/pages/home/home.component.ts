import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  baseUrl = environment.baseUrl;
  user: any;

  histories: any = [];
  message = '';

  fcPassword = new FormControl(['', Validators.required]);

  constructor(
    private router: Router,
    private apiService: ApiService,
    private authService: AuthService
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

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/auth']);
  }

  changePassword() {
    if (this.fcPassword.invalid) {
      return;
    }

    this.authService.changePassword(this.user._id, this.fcPassword.value)
      .subscribe(data => {
        this.message = data.message
      }, err => console.log(err));
  }

}
