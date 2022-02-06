import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/shared/session/session.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  wishlists: any[] = [];
  constructor(private _sessionService: SessionService) { }

  ngOnInit(): void {
    this.getWishlist();
    this.countWishListItem()
  }

  private getWishlist() {
    this.wishlists = this._sessionService.getWish();
  }

  removeWishlist(index: number) {
    this._sessionService.deleteWish(index);
  }

  clearWishlist() {
    this._sessionService.clearWish();
  }

  countWishListItem() {
    return this.wishlists.length;

  }


}
