import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {LaunchService} from '../../../service/launch.service';
import {LaunchBody} from "@src/app/model/Launch-body";

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.scss']
})

export class LaunchComponent implements OnInit {
  imageSrc = '';
  description = '';
  public isEmojiPickerVisible = false;
  emoji = null;
  emojiObject = null;
  // @ts-ignore
  mediaFile: FileList;
  launches: LaunchBody[] = [];
  launch!: LaunchBody;
  launchImg = '';

  constructor(private launchService: LaunchService, private snackBar: MatSnackBar) {
  }

  formatLabel(value: number): any {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
// for image upload
  readURL(event: Event): void {
    // @ts-ignore
    this.mediaFile = event.target.files[0];
    // @ts-ignore
    if (event.target.files && event.target.files[0]) {
      // @ts-ignore
      const file = event.target.files[0];
      console.log(file);
      const reader = new FileReader();
      // @ts-ignore
      reader.onload = e => this.imageSrc = reader.result;
      reader.readAsDataURL(file);
    }
  }


  ngOnInit(): void {
    this.launchService.getRelevantLaunches().subscribe(launch => {
      this.launches = launch;
    }, error => {
      if (error.status === 400) {
        this.snackBar.open('Invalid details!', 'Dismiss', {duration: 2000});
      } else {
        this.snackBar.open('500 Something went wrong!', 'Dismiss', {duration: 2000});
      }
    });
  }

  pitch(event: any): void {
    if (event.value === 1000) {
      if (this.description !== '' && this.imageSrc !== '' && this.emoji !== '') {
        this.createLaunch();
      } else {
        this.snackBar.open('Please complete all items before launch', 'Dismiss', {duration: 2000});
      }
    }
  }

  createLaunch(): void {
    // @ts-ignore
    this.launchService.createLaunch(this.mediaFile, this.description, this.emoji).subscribe(value => {
      console.log('Launch created in the backend ;)');
    }, error => {
      if (error.status === 400) {
        this.snackBar.open('Invalid details!', 'Dismiss', {duration: 2000});
      } else {
        this.snackBar.open('500 Something went wrong!', 'Dismiss', {duration: 2000});
      }
    });
  }

  addEmoji($event: any): void {
    this.emojiObject = $event.emoji.native;
    this.emoji = $event.emoji.name;
  }
}
