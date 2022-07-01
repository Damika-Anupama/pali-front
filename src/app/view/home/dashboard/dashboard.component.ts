import { Component, OnInit } from '@angular/core';
import { LaunchService } from '../../../service/launch.service';
import { LaunchBody } from '../../../model/LaunchBody';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from '@src/environments/environment';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  launches: LaunchBody[] = [];
  launch!: LaunchBody;
  imgSrc = '';
  reactColor = 'black';
  changeReact = false;
  react = 'favorite';
  reacts = ['favorite', 'local_fire_department', 'sentiment_very_dissatisfied', 'auto_awesome', 'sick'];
  imageSrc = '';
  description = '';
  emoji = null;
  // @ts-ignore
  mediaFile: FileList;
  launchImg = '';
  emojis = ['😃', '😍', '😴', '😎', '😡', '🥶', '😞', '🤔', '😶'];
  visibleImage = true;
  visibleVideo = false;
  videoSrc = '';
  visibleAudio = false;
  audioSrc = '';
  userDP = environment.defaultDP


  constructor(public launchService: LaunchService, private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.launchService.getAllLaunches().subscribe(launch => {
      this.launches = launch;
    }, error => {
      if (error.status === 400) {
        this.snackBar.open('Invalid details!', 'Dismiss', {duration: 2000});
      } else {
        this.snackBar.open('500 Something went wrong!', 'Dismiss', {duration: 2000});
      }
    });
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
    const file = event.target.files[0];
    if (file.size / 1000000 > 100) {
      this.snackBar.open('The input media should be less than 100MB 🤕', 'Dismiss', {duration: 2000});
      return;
    }
    // @ts-ignore
    this.mediaFile = event.target.files[0];
    // @ts-ignore
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      const mediaType = file.type.substring(0, 5);
      if (mediaType === 'image') {
        this.visibleImage = true;
        this.visibleAudio = false;
        this.visibleVideo = false;
        this.videoSrc = '';
        this.audioSrc = '';
        // @ts-ignore
        reader.onload = e => this.imageSrc = reader.result;
      } else if (mediaType === 'video') {
        this.visibleVideo = true;
        this.visibleImage = false;
        this.visibleAudio = false;
        this.imageSrc = '';
        this.audioSrc = '';
        // @ts-ignore
        reader.onload = e => this.videoSrc = reader.result;
      } else if (mediaType === 'audio') {
        this.visibleAudio = true;
        this.visibleVideo = false;
        this.visibleImage = false;
        this.imageSrc = '';
        this.videoSrc = '';
        // @ts-ignore
        reader.onload = e => this.audioSrc = reader.result;
      }
      reader.readAsDataURL(file);
    }
  }

  changeColor(): void {
    this.changeReact = !(this.changeReact);
    if (!this.changeReact) {
      this.reactColor = 'black';
      this.react = 'favorite';
    } else {
      this.reactColor = 'warn';
    }
  }

  changeReactType(react: string): void {
    this.react = react;
    this.reactColor = 'warn';
    this.changeReact = true;
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
      this.snackBar.open('Congratulations 🤠\n Launch created Successfully !!', 'Dismiss', {duration: 2000});
      // this.mediaFile = null;
      this.description = '';
      this.emoji = null;
    }, error => {
      if (error.status === 400) {
        this.snackBar.open('Invalid details!', 'Dismiss', {duration: 2000});
      } else {
        this.snackBar.open('500 Something went wrong!', 'Dismiss', {duration: 2000});
      }
    });
  }

  addEmoji(emoji: any): void {
    this.emoji = emoji;
  }

}
