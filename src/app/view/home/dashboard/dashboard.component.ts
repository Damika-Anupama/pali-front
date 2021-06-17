import {Component, OnInit} from '@angular/core';
import {LaunchService} from '../../../service/launch.service';
import {LaunchBody} from '../../../model/Launch-body';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  launches: LaunchBody[] = [];
  launch!: LaunchBody;
  imgSrc = '';

  constructor(public launchService: LaunchService) {
  }

  ngOnInit(): void {
    this.launchService.getAllLaunches().subscribe(launch => {
      this.launches = launch;
    });
  }

}
