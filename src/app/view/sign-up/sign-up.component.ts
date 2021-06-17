import {Component, DoCheck, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, DoCheck {

  username = '';
  selectedGender = '';
  email = '';
  password = '';
  confirmPassword = '';
  @ViewChild('txtUsername')
  txtUsername!: ElementRef;
  userExists = false;
  genders: string[] = ['Male', 'Female', 'Other'];

  constructor(private userService: UserService, private router: Router,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    console.log(this.selectedGender, this.email);
  }

  createAccount(): void {
    this.userService.createAccount(this.username, this.email, this.selectedGender, this.password).subscribe(value => {
      this.router.navigateByUrl('/sign-in');
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
