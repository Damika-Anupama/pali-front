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
  groupIcon = '';
  wallIcon = '';

  constructor(private router: Router, private snackBar: MatSnackBar, private communityService: communityService) {
  }

  ngOnInit(): void {
  }

  // for image upload
  // readURL(event: Event): void {
  //   // @ts-ignore
  //   const file = event.target.files[0];
  //   if (file.size / 1000000 > 100) {
  //     this.snackBar.open('The input media should be less than 100MB 🤕', 'Dismiss', { duration: 2000 });
  //     return;
  //   }
  //   // @ts-ignore
  //   this.mediaFile = event.target.files[0];
  //   // @ts-ignore
  //   if (event.target.files && event.target.files[0]) {
  //     const reader = new FileReader();
  //     const mediaType = file.type.substring(0, 5);
  //     if (mediaType === 'image') {
  //       // @ts-ignore
  //       reader.onload = e => this.imageSrc = reader.result;
  //     }
  //     reader.readAsDataURL(file);
  //   }
  // }
  setGroupIcon(event: Event):void{

  }

  createCommunityPage(): void {
    //@ts-ignore 
    this.communityService.createCommunity(this.description, this.title, this.groupIcon,this.wallIcon).subscribe(value => {
      this.snackBar.open('Congratulations 🤠\n Community created Successfully !!', 'Dismiss', { duration: 2000 });
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
