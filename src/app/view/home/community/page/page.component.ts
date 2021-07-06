import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  heading: any;

  constructor() { }

  ngOnInit(): void {
    this.heading = localStorage.getItem('comName') + ' community';
  }

}
