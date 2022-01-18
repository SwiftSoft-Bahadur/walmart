import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  BASE_URL = "https://wolmart.herokuapp.com/api/category";

  constructor(private http: HttpClient) { }

  indexCategory(): Observable<any> {
    return this.http.get<any>(this.BASE_URL);
  }

  topCatOfMon(): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/topCatOfMon`);
  }

  storeCategory(category: any): Observable<any> {
    return this.http.post<any>(this.BASE_URL, category);
  }
}
