import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    var user = JSON.parse(localStorage.getItem('user')!);
    if (user['role'] === 'admin') {
      this.router.navigate(['/admin']);
    } else {
      this.router.navigate(['/home']);
    }
  }

}
