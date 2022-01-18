import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/product/product.service';

@Component({
  selector: 'app-popular-departments',
  templateUrl: './popular-departments.component.html',
  styleUrls: ['./popular-departments.component.css']
})
export class PopularDepartmentsComponent implements OnInit {

  featuredProducts: any[] = [];
  newArrivalProducts: any[] = [];
  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this._productService.listFeaturedProduct().subscribe((res: any[]) => this.featuredProducts = res);
    this._productService.newArrival().subscribe((res: any[]) => this.newArrivalProducts = res);
  }

}
