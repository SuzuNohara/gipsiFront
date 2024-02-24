import { Component, OnInit } from '@angular/core';
import { GapsiService } from '../gapsi.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public suppliers: any[];

  constructor(public gapsi: GapsiService) { 
    this.suppliers = [];
  }

  ngOnInit(): void {
    this.gapsi.getAllSuppliers().then((data) => {
      this.suppliers = data;
    });
  }

}
