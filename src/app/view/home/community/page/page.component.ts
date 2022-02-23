import { Component, OnInit } from '@angular/core';
import { LaunchBody } from '@src/app/model/Launch-body';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  launches: LaunchBody[] = [];
  launch!: LaunchBody;
  imgSrc = '';
  reactColor = 'black';
  changeReact = false;
  react = 'favorite';
  reacts = ['favorite', 'local_fire_department', 'sentiment_very_dissatisfied', 'auto_awesome', 'sick'];

  heading: any;

  constructor() { }

  ngOnInit(): void {
    this.heading = localStorage.getItem('comName') + ' community';
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

}
