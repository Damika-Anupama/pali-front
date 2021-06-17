import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.snackBar.open('This Page shown upon when someone searches your profile', 'Dismiss',{duration: 2000});
  }

}
