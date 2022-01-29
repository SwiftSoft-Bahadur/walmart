import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoryService } from 'src/app/shared/category/category.service';
import { SessionService } from 'src/app/shared/session/session.service';
import { AccountComponent } from '../auth/account/account.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  categories: any[] = [];
  username: any

  constructor(
    private _CategoryService: CategoryService,
    public dialog: MatDialog,
    private _session: SessionService) { }

  ngOnInit(): void {
    this._CategoryService.indexCategory().subscribe((res: any[]) => this.categories = res);
    this.username = this._session.getUser();
  }

  openDialog() {
    const dialogRef = this.dialog.open(AccountComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
