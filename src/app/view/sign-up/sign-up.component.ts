import { Component, DoCheck, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ThemePalette } from '@angular/material/core';

declare var require: any;

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})


export class SignUpComponent implements OnInit, DoCheck {
  username = '';
  email = '';
  contactNumber = '';
  password = '';
  confirmPassword = '';
  @ViewChild('txtUsername')
  txtUsername!: ElementRef;
  userExists = false;
  selectedGender = '';
  genders: string[] = ['Male', 'Female', 'Other'];
  color: ThemePalette = 'accent';
  showUserPic = false;

  constructor(private userService: UserService, private router: Router,
    private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  createAccount(): void {
    this.userService.createAccount(this.username, this.email, this.contactNumber, this.selectedGender, this.password).subscribe(value => {
      this.userService.authenticate(this.username, this.password)
      .subscribe(token => {
        sessionStorage.setItem(`token`, token.jwt);
        sessionStorage.setItem(`userId`, token.userId);
        this.router.navigateByUrl('/home');
      }, error => {
        this.snackBar.open('Invalid username and password', 'Dismiss', {
          duration: 1500
        });
        (this.txtUsername.nativeElement as HTMLInputElement).focus();
      });
    }, error => {
      if (error.status === 400) {
        this.snackBar.open('Invalid details!', 'Dismiss', {
          duration: 2000
        });
        (this.txtUsername.nativeElement as HTMLInputElement).select();
      } else {
        this.snackBar.open('500 Something went wrong!', 'Dismiss', {
          duration: 2000
        });
      }
    });
  }

  ngDoCheck(): void {
  }

  findUser(): void {
    this.userService.findUser(this.username).subscribe(value => {
      this.userExists = true;
    }, error => {
      this.userExists = false;
    });
  }
}
