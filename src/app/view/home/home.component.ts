import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {SearchTabComponent} from '../search-tab/search-tab.component';
import {UserService} from "@src/app/service/user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(public dialog: MatDialog, private userService: UserService) {
  }


  ngOnInit(): void {
    const item = sessionStorage.getItem('userId');
    // @ts-ignore
    const userDetailsById = this.userService.getUserDetailsById(item.toString()).subscribe((value => {
      console.log(value);
    }));
    console.log(userDetailsById);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SearchTabComponent, {
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
