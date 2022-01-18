import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/category/category.service';

@Component({
  selector: 'app-category-section',
  templateUrl: './category-section.component.html',
  styleUrls: ['./category-section.component.css']
})
export class CategorySectionComponent implements OnInit {
  topCategoriesOfTheMon: any
  constructor(private _categoryService: CategoryService) { }
  ngOnInit(): void {
    this._categoryService.topCatOfMon().subscribe(res => this.topCategoriesOfTheMon = res);
  }

}
