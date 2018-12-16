import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

interface User {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private http: HttpClient) {
  }

  authenticate(user: User) {
    return this.http.post('http://localhost:3000/login', user, {responseType: 'json'});
  }
}
