import {Component, OnInit} from '@angular/core';
import {UserService} from '@src/app/service/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  img = '';
  profilePic = '';
  shortDes = '';
  username = '';
  email = '';
  phoneNumber = '';

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
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
      reader.onload = e => this.img = reader.result;
      reader.readAsDataURL(file);
    }
  }

  updateUserDetails(): void {
    const userId = sessionStorage.getItem('userId');
    this.userService.updateUser(userId, this.profilePic, this.shortDes, this.username, this.email, this.phoneNumber);
  }
}
