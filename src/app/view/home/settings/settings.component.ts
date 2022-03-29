import { Component, OnInit } from '@angular/core';
import { UserService } from '@src/app/service/user.service';
import { MatSnackBar } from "@angular/material/snack-bar";
import { environment } from '@src/environments/environment';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  profilePic = environment.defaultDP;
  shortDes = '';
  username = '';
  email = '';
  phoneNumber = '';
  password = '';
  userId = sessionStorage.getItem('userId');

  constructor(private userService: UserService, private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {

    this.userService.getUserDetailsById(this.userId)
      .subscribe(value => {
        if (value.profilePicture !== null) {
          this.profilePic = 'data:image/png;base64,' + value.profilePicture;
        }
        this.shortDes = value.shortDescription;
        this.username = value.username;
        this.email = value.email;
        this.phoneNumber = value.contactNum;
        this.password = value.password;
      }, error => {
        console.log(error)
        if (error.status === 400) {
          this.snackBar.open('Invalid details! 🤐', 'Dismiss', {
            duration: 2000
          });
        } else {
          this.snackBar.open('500 Something went wrong! Please try again in little bit later 🤕', 'Dismiss', {
            duration: 2000
          });
        }
      });
  }


  readURL(event: Event): void {
    // @ts-ignore
    this.profilePic = event.target.files[0];
    // @ts-ignore
    if (event.target.files && event.target.files[0]) {
      // @ts-ignore
      const file = event.target.files[0];
      const reader = new FileReader();
      // @ts-ignore
      reader.onload = e => this.profilePic = reader.result;
      reader.readAsDataURL(file);
    }
  }

  updateUserDetails(): void {
    if (this.userId === null){
      this.userId = 'no-userId'
    }
    this.userService.updateUser(this.userId, this.profilePic, this.shortDes, this.username, this.email, this.phoneNumber)
      .subscribe(value => {
        this.snackBar.open('Your changes saved successfully 😊', 'Dismiss', { duration: 2000 });
        this.userService.authenticate(this.username, this.password)
          .subscribe(token => {
            sessionStorage.clear();
            sessionStorage.setItem(`token`, token.jwt);
            sessionStorage.setItem(`userId`, token.userId);
          });
      }, error => {
        if (error.status === 400) {
          this.snackBar.open('Invalid details! 🤐', 'Dismiss', {
            duration: 2000
          });
        } else {
          this.snackBar.open('500 Something went wrong! Please try again in little bit later 🤕', 'Dismiss', {
            duration: 2000
          });
        }
      });
  }
}
