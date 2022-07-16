import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { communityService } from '@src/app/service/community.service';

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.scss']
})
export class BuildComponent implements OnInit {
  description = '';
  title = '';
  groupIcon: FileList | undefined;
  wallIcon: FileList | undefined;

  constructor(private router: Router, private snackBar: MatSnackBar, private communityService: communityService) {
  }

  ngOnInit(): void {
  }

  // for image upload
  readURL(event: Event, icon: string): void {
    if (icon == "groupIcon") {
      // @ts-ignore
      this.groupIcon = event.target.files[0];
      const reader = new FileReader();
      // @ts-ignore
      reader.onload = e => this.groupIcon = reader.result;
    } else if (icon == "wallIcon") {
      // @ts-ignore
      this.wallIcon = event.target.files[0];
      const reader = new FileReader();
      // @ts-ignore
      reader.onload = e => this.wallIcon = reader.result;
    }
  }



  setGroupIcon(event: Event): void {

  }

  createCommunityPage(): void {
    //@ts-ignore 
    this.communityService.createCommunity(this.description, this.title, this.groupIcon, this.wallIcon).subscribe(value => {
      console.log(value)
      this.snackBar.open('Community created Successfully !!', 'Dismiss', { duration: 2000 });
      // this.mediaFile = null;
      // this.description = '';
      // this.emoji = null;
      this.router.navigateByUrl('/home/com/page/' + localStorage.getItem('comName'));
    }, error => {
      if (error.status === 400) {
        this.snackBar.open('Invalid details!', 'Dismiss', { duration: 2000 });
      } else {
        this.snackBar.open('500 Something went wrong!', 'Dismiss', { duration: 2000 });
      }
    });

    localStorage.setItem('comName', this.description);
  }
}
