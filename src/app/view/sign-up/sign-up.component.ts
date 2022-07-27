import { Component, DoCheck, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ThemePalette } from '@angular/material/core';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';

declare var require: any;

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})


export class SignUpComponent implements OnInit, DoCheck {
  username = '';
  email = '';
  gender =""
  dob = ""
  password = '';
  confirmPassword = '';
  @ViewChild('txtUsername')
  txtUsername!: ElementRef;
  userExists = false;
  emailExists = false;
  selectedGender = '';
  color: ThemePalette = 'accent';
  showUserPic = false;

  constructor(private userService: UserService, private router: Router,
    private snackBar: MatSnackBar, private socialAuthService: SocialAuthService) {
  }

  ngOnInit(): void {
  }

  createAccount(): void {
    // console.log(this.username,this.email,this.gender,this.dob,this.password);
    // send a verification code to the email
    const num = this.getRandomInt(0,10000000);
    this.userService.sendVerificationCode(num, this.email)
    // tally with the verification code
    // then create the account

    // this.userService.createAccount(this.username, this.email, this.gender, this.selectedGender, this.password).subscribe(value => {
    //   this.userService.authenticate(this.username, this.password)
    //   .subscribe(token => {
    //     sessionStorage.setItem(`token`, token.jwt);
    //     sessionStorage.setItem(`userId`, token.userId);
    //     sessionStorage.setItem(`profilePicture`, token.profilePicture);
    //     sessionStorage.setItem(`userName`, token.userName);
    //     this.router.navigateByUrl('/home');
    //   }, error => {
    //     this.snackBar.open('Invalid username and password', 'Dismiss', {
    //       duration: 1500
    //     });
    //     (this.txtUsername.nativeElement as HTMLInputElement).focus();
    //   });
    // }, error => {
    //   if (error.status === 400) {
    //     this.snackBar.open('Invalid details!', 'Dismiss', {
    //       duration: 2000
    //     });
    //     (this.txtUsername.nativeElement as HTMLInputElement).select();
    //   } else {
    //     this.snackBar.open('500 Something went wrong!', 'Dismiss', {
    //       duration: 2000
    //     });
    //   }
    // });
  }
  getRandomInt(min:number, max:number) : number{
    return Math.floor(Math.random() * (max - min + 1) + min); 
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

  findEmail():void {
    this.userService.findEmail(this.email).subscribe(value => {
      this.emailExists = true;
    }, error => {
      this.emailExists = false;
    });
  }

  // login(userName: string, password: string): void {
  //   this.userService.authenticate(userName, password)
  //     .subscribe(token => {
  //       sessionStorage.setItem(`token`, token.jwt);
  //       sessionStorage.setItem(`userId`, token.userId);
  //       sessionStorage.setItem(`profilePicture`, token.profilePicture);
  //       sessionStorage.setItem(`userName`, token.userName);
  //       this.router.navigateByUrl('/home');
  //     }, error => {
  //       this.snackBar.open('Invalid username and password', 'Dismiss', {
  //         duration: 1500
  //       });
  //       (this.txtUsername.nativeElement as HTMLInputElement).focus();
  //     });
  // }

  // loginWithGoogle(): void {
  //   this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(data => {

  //     this.userService.findUser(data.name).subscribe(value => {
  //       this.login(data.name, data.id)
  //     }, error => {
  //       this.userService.createAccount(data.name, data.email, this.contactNumber, this.gender, data.id).subscribe(value => {
  //         this.login(data.name, data.id)
  //       }, error => {
  //         if (error.status === 400) {
  //           this.snackBar.open('Invalid details!', 'Dismiss', {
  //             duration: 2000
  //           });
  //           (this.txtUsername.nativeElement as HTMLInputElement).select();
  //         } else {
  //           this.snackBar.open('500 Something went wrong!', 'Dismiss', {
  //             duration: 2000
  //           });
  //         }
  //       });
  //     });

  //   });
  // }

  // loginWithFacebook(): void {
  //   this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then(data => {
  //     this.userService.findUser(data.name).subscribe(value => {
  //       this.login(data.name, data.id)
  //     }, error => {
  //       this.userService.createAccount(data.name, data.email, this.contactNumber, this.gender, data.id).subscribe(value => {
  //         this.login(data.name, data.id)
  //       }, error => {
  //         if (error.status === 400) {
  //           this.snackBar.open('Invalid details!', 'Dismiss', {
  //             duration: 2000
  //           });
  //           (this.txtUsername.nativeElement as HTMLInputElement).select();
  //         } else {
  //           this.snackBar.open('500 Something went wrong!', 'Dismiss', {
  //             duration: 2000
  //           });
  //         }
  //       });
  //     });

  //   });
  // }
}
