import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/shared/product/product.service';
import { SessionService } from 'src/app/shared/session/session.service';

@Component({
  selector: 'app-popular-departments',
  templateUrl: './popular-departments.component.html',
  styleUrls: ['./popular-departments.component.css']
})
export class PopularDepartmentsComponent implements OnInit {

  featuredProducts: any[] = [];
  newArrivalProducts: any[] = [];
  constructor(
    private _productService: ProductService,
    private _sessionService: SessionService,
  ) { }

  ngOnInit(): void {
    this._productService.listFeaturedProduct().subscribe((res: any[]) => this.featuredProducts = res);
    this._productService.newArrival().subscribe((res: any[]) => this.newArrivalProducts = res);

    let p = this._sessionService.getCookie('wishlist')
    console.log(p);
  }


  addToCart(product: any) {
    this._sessionService.setCart(product);
  }

  setWishList(wishlist: any) {
    this._sessionService.setWish(wishlist)
  }


}


