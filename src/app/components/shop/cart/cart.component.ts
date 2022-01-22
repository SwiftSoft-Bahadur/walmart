import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/shared/session/session.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  constructor(private _sessionService: SessionService) { }

  ngOnInit(): void {
    this.getCartItems();
  }

  private getCartItems() {
    this.cartItems = this._sessionService.getCart();
  }

  removeCartItem(index: number) {
    this._sessionService.deleteCart(index);
  }

  clearCart() {
    this._sessionService.clearCart();
  }
}
