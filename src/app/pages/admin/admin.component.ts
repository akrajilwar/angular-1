import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  user: any;

  constructor(
    private router: Router,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user')!);
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/auth']);
  }

}
