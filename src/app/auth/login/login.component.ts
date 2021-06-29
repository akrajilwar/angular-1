import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  fcEmail = new FormControl();
  fcPassword = new FormControl();

  message: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.message = '';
    
    this.authService.login(this.fcEmail.value, this.fcPassword.value)
      .subscribe(res => {
        this.authService.setUserInfo(res['user']);

        console.log(res['user']);

        if (res['user']['role'] === 'admin') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/home']);
        }
      }, err => {
        console.error(err);
        this.message = err.error.message;
      });
  }

}
