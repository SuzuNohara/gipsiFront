import { Component, OnInit } from '@angular/core';
import { GapsiService } from '../gapsi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public message: string;
  public version: string;

  constructor(private gapsi: GapsiService) {
    this.message = 'Bienvenido';
    this.version = "0.1.2";
  }

  ngOnInit(): void {
    // this.gapsi.getMessage().then(data => {
    //   this.message = data + '';
    // });
    // this.gapsi.getMessage().then(data => {
    //   this.version = data + '';
    // });
  }

}
