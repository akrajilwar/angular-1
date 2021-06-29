import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  states(): Observable<any> {
    return this.http.get('assets/states.json');
  }

  getHistories(id: string): Observable<any> {
    return this.http.get(`${environment.baseUrl}/api/histories/${id}`);
  }

  getUsers(): Observable<any> {
    return this.http.get(`${environment.baseUrl}/api/users`);
  }

}
