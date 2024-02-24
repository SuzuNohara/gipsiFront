import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.scss']
})
export class FabComponent implements OnInit {

  @Output('click') click = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  public emmit(){
    this.click.emit();
  }
}
