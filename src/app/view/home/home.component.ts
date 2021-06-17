import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {SearchTabComponent} from '../search-tab/search-tab.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(public dialog: MatDialog) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SearchTabComponent,{
      height: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed & result is :' + result);
    });
  }

  logout(): void {
    sessionStorage.clear();
    localStorage.clear();
  }
}
