import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.scss']
})
export class BuildComponent implements OnInit {
  description = '';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  createCommunityPage(): void {
    localStorage.setItem('comName', this.description);
    this.router.navigateByUrl('/home/com/page/' + localStorage.getItem('comName'));
  }
}
