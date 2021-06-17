import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {GoogleLoginProvider, SocialAuthService, SocialUser} from 'angularx-social-login';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  username = '';
  password = '';
  @ViewChild('txtUsername')
  txtUsername!: ElementRef;
  @ViewChild('frm')
  frmSignIn!: NgForm;
  // @ts-ignore
  socialUser: SocialUser;
  // @ts-ignore
  isLoggedin: boolean;

  constructor(private userService: UserService, private router: Router,
              private snackBar: MatSnackBar, private socialAuthService: SocialAuthService) {
  }

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = (user != null);
      console.log(this.socialUser);
    });
  }

  authenticate(): void {
    this.userService.authenticate(this.username, this.password)
      .subscribe(token => {
        console.log(token)
        sessionStorage.setItem(`token`, token.jwt);
        sessionStorage.setItem(`userId`, token.userId);
        sessionStorage.setItem('uname', this.username);
        this.router.navigateByUrl('/home');
      }, error => {
        this.snackBar.open('Invalid username and password', 'Dismiss');
        this.username = '';
        this.password = '';
        this.frmSignIn.reset();
        (this.txtUsername.nativeElement as HTMLInputElement).focus();
      });
  }

  loginWithGoogle(): void {
    const socialUserPromise = this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
    console.log(socialUserPromise);
  }
}
