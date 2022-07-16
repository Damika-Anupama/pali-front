import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SearchTabComponent } from '../pop-ups/search-tab/search-tab.component';
import { UserService } from "@src/app/service/user.service";
import { SocialAuthService } from 'angularx-social-login';
import { Router } from '@angular/router';
import { environment } from '@src/environments/environment';
import { profileObserverService } from '@src/app/service/profile.observer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  profilePicture = '';
  userName = sessionStorage.getItem('userName')  || '{}';
  userId = sessionStorage.getItem('userId')  || '{}';

  constructor(
    public dialog: MatDialog, 
    private userService: UserService, 
    private router: Router, 
    private authService: SocialAuthService,
    private profileObserver: profileObserverService
    ) {
  }


  ngOnInit(): void {
    if(sessionStorage.getItem('profilePicture') != 'null'){
      this.profilePicture = 'data:image/png;base64,' + sessionStorage.getItem('profilePicture')
    }else{
      this.profilePicture = environment.defaultDP;
    }
  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.position = {
      // 'top': '0',
      // left: '0',
      // right: '0',
      // bottom: '0'
    };


    this.dialog.open(SearchTabComponent, dialogConfig);

  }
  gotoads(): void {
    this.router.navigateByUrl('/home/ads')
  }
  gotosuggestions(): void {
    this.router.navigateByUrl('/home/suggestions')
  }

  gotocontactus(): void {
    this.router.navigateByUrl('/home/contact-us')
  }

  gotodonate(): void {
    this.router.navigateByUrl('/home/donate')
  }

  gotomoreinfo(): void {
    this.router.navigateByUrl('/home/more-info')
  }

  logout(): void {
    sessionStorage.clear();
    localStorage.clear();
    this.authService.signOut();
    this.router.navigateByUrl('/welcome')
  }
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  gotoProfile(): void {
    this.profileObserver.updateApprovalMessage(this.userId);
    this.router.navigateByUrl('/home/profile')
  }
  gotoSettings():void {
    this.router.navigateByUrl('/home/settings')
  }
}
