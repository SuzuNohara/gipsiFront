import { Component, ViewChild } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { SidebarComponent } from './comp/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('toggleMenu', [
      state('open', style({
        width: '10vw'
      })),
      state('closed', style({
        width: '5vw'
      })),
      transition('closed => open', [
        animate('0.2s')
      ]),
      transition('open => closed', [
        animate('0.2s')
      ]),
    ]),
    trigger('toggleBody', [
      state('open', style({
        width: '95vw'
      })),
      state('closed', style({
        width: '90vw'
      })),
      transition('closed => open', [
        animate('0.2s')
      ]),
      transition('open => closed', [
        animate('0.2s')
      ]),
    ])
  ]
})
export class AppComponent {
  
  public sideMenu: boolean;
  @ViewChild(SidebarComponent) sidebar!: SidebarComponent;

  constructor(){
    this.sideMenu = false;
  }

  toggle(){
    this.sideMenu = !this.sideMenu;
    this.sidebar.open = this.sideMenu;
  }
}
