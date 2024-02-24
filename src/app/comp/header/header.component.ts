import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FilesService } from 'src/app/services/files.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public current: string;

  public menuBool;
  @Output('menu') menu = new EventEmitter<boolean>();

  constructor(private file: FilesService) {
    this.menuBool = false;
    this.current = '';
  }

  ngOnInit(): void {
    this.file.init();
    this.file.readDir('.');
  }

  toggleMenu(){
    this.menuBool = !this.menuBool;
    this.menu.emit(this.menuBool);
  }

}
