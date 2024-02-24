import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { DataService } from './data.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackService {

  constructor(private data: DataService) {}
}
