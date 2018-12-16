import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface User {
  email: string;
  username: string;
  password: string;
  dob: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostuserService {

  constructor(private http: HttpClient) {
  }

  postuser(user: User) {
    return this.http.post('http://localhost:3000/postuser', user, {responseType: 'json'});
  }


}
