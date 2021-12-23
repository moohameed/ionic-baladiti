import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { map, filter, scan } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private httpClient: HttpClient) { }
  //   public getlistgouvernoratws() {
  //     const httpOptions = {
  //       headers : new HttpHeaders({})
  //     } ;

  //     return this.httpClient.post('http://localhost/gouvernorat/listgouvernoratws','',httpOptions).pipe(
  //     map  ((res) => {
  //       if(true) {return res;}
  //     })
  //     );
  // }
  // public getlistgouvernoratwsGet() {
  //   return this.httpClient.get('http://localhost/gouvernorat/listgouvernoratws');

  // }
}
