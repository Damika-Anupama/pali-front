import { Component, OnInit } from '@angular/core';
import { LaunchService } from '../../../service/launch.service';
import { LaunchBody } from '../../../model/Launch-body';
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

  constructor(public launchService: LaunchService) {
  }

  ngOnInit(): void {
    this.launchService.getAllLaunches().subscribe(launch => {
      this.launches = launch;
    });
    
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
