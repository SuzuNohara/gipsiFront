import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GapsiService {

  constructor(private http: HttpClient) { }

  public getMessage(): Promise<String>{
    return new Promise<String>((resolve) => {
      this.http.get("localhost:8080/gapsi/message").subscribe((data) => {
        resolve(data + "");
      });
    });
  }

  public getVersion(): Promise<String> {
    return new Promise<String>((resolve) => {
      this.http.get("localhost:8080/gapsi/version").subscribe((data) => {
        resolve(data + "");
      });
    });
  }

  public getAllSuppliers(): Promise<any>{
    return new Promise<any>((resolve) => {
      this.http.get("localhost:8080/gapsi/suppliers").subscribe((data) => {
        resolve(data);
      });
    });
  }
}
