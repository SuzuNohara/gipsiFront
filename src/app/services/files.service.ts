import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  private fs: any;

  constructor() {
  }

  public init(){
    this.fs = (window as any).fs;
  }

  public readFile(directory: string, filename: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this.fs.readFile(directory + filename, 'utf8', (error: any, data: any) => {
        let content: string = '';
        if(error){
          console.log(error);
          reject();
        }
        console.log(data);
        resolve(data);
      });
    });
  }

  public writeFile(){

  }

  public readDir(directory: string): Promise<string>{
    return new Promise( (resolve, reject) =>{
      this.fs.readDir(directory, (error: any, data: any) => {
        data.forEach((file: any) => {
          console.log(file);
        });
      });
    });
  }

  public createDir(directory: string): Promise<string>{
    return new Promise( (resolve, reject) =>{
      this.fs.readDir(directory, (error: any, data: any) => {
        data.forEach((file: any) => {
          console.log(file);
        });
      });
    });
  }
}
