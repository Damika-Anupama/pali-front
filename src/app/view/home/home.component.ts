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
  imgSrc = '';

  constructor(public dialog: MatDialog, private userService: UserService) {
  }


  ngOnInit(): void {
    const item = sessionStorage.getItem('userId');
    this.userService.getProfilePic(item).subscribe((value => {
      this.imgSrc = 'data:image/png;base64,' + value.profilePic;
    }));
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
