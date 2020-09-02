import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // api url
  apiUrl = 'https://api.github.com';

  constructor( private http: HttpClient) { }
  // get all users
  getUsers() {
    return ( this.http.get(`${this.apiUrl}/users`) );
  }
  // get user by name
  getUserByName(name: any) {
    return ( this.http.get(`${this.apiUrl}/users/${name}`) );
  }

}
