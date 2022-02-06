import { Location } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  arrCart: any[] = [];
  arrWish: any[] = [];
  cookieCart: any[] = []
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

  // wish localStorage
  setWish(wishRef: any) {
    if (this.arrWish.indexOf(wishRef) == -1) {
      this.arrWish.push(wishRef)
    }
    localStorage.setItem("wish", JSON.stringify(this.arrWish))
  }

  getWish() {
    let wish = localStorage.getItem('wish')
    if (wish) {
      return JSON.parse(wish);
    }
  }

  deleteWish(index: any) {
    this.arrWish.splice(index, 1);
    localStorage.setItem("wish", JSON.stringify(this.arrWish))
  }

  clearWish() {
    localStorage.clear();
  }
  // cart localStorage end

  // Wishlist Cookie
  setCookie(name: any, value: any, days: any) {

    
    if (this.cookieCart.indexOf(value) === -1) {
      
      var expires = "";
      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = `${"; expires="}${date.toUTCString()}`;
      }
      this.cookieCart.push(value);
      var CR = Array(this.cookieCart)
      document.cookie += `${name}=${JSON.stringify(CR)} ${expires} ${"; path=/"}`;
    }

  }

  getCookie(name: any) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

}