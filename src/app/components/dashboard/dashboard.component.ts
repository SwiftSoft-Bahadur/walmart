import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/shared/session/session.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username: any;
  constructor(private _sessionService: SessionService) { }

  ngOnInit(): void {
    this.username = this._sessionService.getUser();
  }


  Logout() {
    this._sessionService.deleteToken();
    this._sessionService.deleteUser();
  }

}
