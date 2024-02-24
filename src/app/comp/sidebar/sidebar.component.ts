import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public open: boolean;
  public location: string;

  constructor() {
    this.open = false;
    this.location = '';
  }

  ngOnInit(): void {
  }

}
