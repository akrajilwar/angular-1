import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  isAuthenticated(): Boolean {
    let userData = localStorage.getItem('user')
    if (userData && JSON.parse(userData)) {
      return true;
    }
    return false;
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(environment.baseUrl + '/login', {
      email: email,
      password: password
    });
  }

  register(body: any): Observable<any> {
    return this.http.post(environment.baseUrl + '/register', body);
  }

  changePassword(id: any, password: string): Observable<any> {
    return this.http.post(environment.baseUrl + '/reset-password/' + id, { password: password });
  }

  setUserInfo(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }
}
