import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class Authentication {

  httpOptions: any = {};
  constructor(private http: HttpClient) {
  }

  post(link, option, data: any = {}) {
    /*link = url
      option = wheter request needed token or not
      token = public or private
      data = Data
    */
    let token;

    switch (option) {
      case 'private':

        token = 'Bearer ' + localStorage.getItem('access_token');
        this.httpOptions = {
          headers: new HttpHeaders({ 'Authorization': token, 'Access-Control-Allow-Origin': '*' })
        };
        break;

      case 'public':

        token = 'Bearer ' + localStorage.getItem('public_key');
        this.httpOptions = {
          headers: new HttpHeaders({ 'Authorization': token, 'Access-Control-Allow-Origin': '*' })
        };
        break;

      default:

        this.httpOptions = {
          headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*' })
        };
        break;
    }
    return this.http.post(link, data, this.httpOptions).pipe(map((response: Response) => {
      return response;
    }));
  }

  get(link, option) {
    /*link = url
      option = wheter request needed auth or not
      token = public or private
    */

    let token;

    switch (option) {
      case 'private':
        token = 'Bearer ' + localStorage.getItem('access_token');
        this.httpOptions = {
          headers: new HttpHeaders({ 'Authorization': token, 'Access-Control-Allow-Origin': '*' })
        };
        break;

      case 'public':
        token = 'Bearer ' + localStorage.getItem('public_key');
        this.httpOptions = {
          headers: new HttpHeaders({ 'Authorization': token, 'Access-Control-Allow-Origin': '*' })
        };
        break;

      default:
        this.httpOptions = {
          headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*' })
        };
        break;
    }
    return this.http.get(link, this.httpOptions).pipe(map((response: Response) => {
      return response;
    }));
  }
}
