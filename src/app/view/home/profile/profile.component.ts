import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "@src/app/service/user.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private snackBar: MatSnackBar, private activatedRoute: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit(): void {
    const userId = sessionStorage.getItem("userId");
    console.log(userId);
    this.userService.getProfileInfo(userId).subscribe(value => {
      this.snackBar.open('This Page shown upon when someone searches your profile', 'Dismiss', {duration: 2000});
    }, error => {
      if (error.status === 400) {
        this.snackBar.open('Invalid details!', 'Dismiss', {duration: 2000});
      } else {
        this.snackBar.open('500 Something went wrong!', 'Dismiss', {duration: 2000});
      }
    });
  }
}
