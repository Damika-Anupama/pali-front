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
  profilePicture = null;
  userName = '';
  public user: SocialUser = new SocialUser;
  constructor(private userService: UserService, private router: Router,
              private snackBar: MatSnackBar, private socialAuthService: SocialAuthService) {
  }

  ngOnInit(): void {
  }

  authenticate(): void {
    this.userService.authenticate(this.username, this.password)
      .subscribe(token => {
        sessionStorage.setItem(`token`, token.jwt);
        sessionStorage.setItem(`userId`, token.userId);
        this.profilePicture = token.profilePicture;
        this.userName = token.userName;
        this.router.navigateByUrl('/home');
      }, error => {
        this.snackBar.open('Invalid username and password', 'Dismiss', {
          duration: 1500
        });
        this.username = '';
        this.password = '';
        this.frmSignIn.reset();
        (this.txtUsername.nativeElement as HTMLInputElement).focus();
      });
  }

  navigatetohome(): void{
    this.router.navigateByUrl('/home');
  }

  googleLoginOptions = {
    scope: 'profile email'
  }; // https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiauth2clientconfig
  
  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID, this.googleLoginOptions).then(data =>{
      console.log(data)
    });
  }
}
