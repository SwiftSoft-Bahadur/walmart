import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/shared/session/session.service';

@Component({
  selector: 'app-prodpage',
  templateUrl: './prodpage.component.html',
  styleUrls: ['./prodpage.component.css']
})
export class ProdpageComponent implements OnInit {

  constructor(private _sessionService:SessionService) { }

  ngOnInit(): void {
  }


  addToCart() {
    this._sessionService.setCart("Works!");
  }
}
