import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private BASE_URL = "https://wolmart.herokuapp.com/api/product";
  
  constructor(private http: HttpClient) { }

  listFeaturedProduct(): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/featured`);
  }
  
  newArrival(): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/newArrival`);
  }
}
