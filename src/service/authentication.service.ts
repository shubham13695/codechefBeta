import { Injectable} from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class Authentication {

  httpOptions: any = { };
  constructor(private http: HttpClient) {
  }

  post(link, option, token, data= {} ) {
    /*link = url
      option = wheter request needed token or not
      token = public or private
      data = Data
    */

    token = 'Bearer ' + token;

    switch (option) {
      case 'private':
        this.httpOptions = {
          headers: new HttpHeaders({ 'Authorization': token, 'Access-Control-Allow-Origin': '*' })
        };
      break;

      case 'public':
        this.httpOptions = {
          headers: new HttpHeaders({ 'Authorization': token, 'Access-Control-Allow-Origin': '*'})
        };
      break;

      default:
        this.httpOptions = {
          headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*' })
        };
      break;
    }
      return this.http.post(link, data, this.httpOptions).pipe(map((response: Response) => {
        return response.json(); }));
  }

  get(link, option, token) {
    /*link = url
      option = wheter request needed auth or not
      token = public or private
    */

    token = 'Bearer ' + token;

    switch (option) {
      case 'public_key':
        this.httpOptions = {
          headers: new HttpHeaders({ 'Authorization': token, 'Access-Control-Allow-Origin': '*'})
        };
      break;

      case 'client_key':
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
        return response.json(); }));
  }
}
