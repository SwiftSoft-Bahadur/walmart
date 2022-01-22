import { Location } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  arrCart: any[] = [];

  constructor() { }

  getUser() {
    let user = sessionStorage.getItem('user');
    if (user) {
      return JSON.parse(user);
    }
  }

  setUser(user: any) {
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  deleteUser() {
    sessionStorage.removeItem('user');
    window.location.href = "";
  }

  getToken() {
    let user = sessionStorage.getItem('token');
    if (user) {
      return JSON.parse(user);
    }
  }

  setToken(user: any) {
    sessionStorage.setItem('token', JSON.stringify(user));
  }

  deleteToken() {
    sessionStorage.removeItem('token');
    window.location.href = "";
  }

  // cart localStorage
  setCart(cartRef: any) {
    if (this.arrCart.indexOf(cartRef) == -1) {
      this.arrCart.push(cartRef)
    }
    localStorage.setItem("cart", JSON.stringify(this.arrCart))
  }

  getCart() {
    let cart = localStorage.getItem('cart')
    if (cart) {
      return JSON.parse(cart);
    }
  }

  deleteCart(index: any) {
    this.arrCart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(this.arrCart))
  }

  clearCart() {
    localStorage.clear();
  }
  // cart localStorage end


}