import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  getUser() {
    let user = localStorage.getItem('user');
    if (user) {
      return JSON.parse(user);
    }
  }

  setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  deleteUser() {
    localStorage.removeItem('user');
    window.location.href = "";
  }

  getToken() {
    let user = localStorage.getItem('token');
    if (user) {
      return JSON.parse(user);
    }
  }

  setToken(user: any) {
    localStorage.setItem('token', JSON.stringify(user));
  }

  deleteToken() {
    localStorage.removeItem('token');
    window.location.href = "";
  }

}