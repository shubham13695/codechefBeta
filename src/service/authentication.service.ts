import { Injectable} from '@angular/core';
import { Http } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable()
export class Authentication {

  constructor(private http: Http) {

  }

  get(link) {
    return this.http.get(link);
  }
  post(link, data): Observable<any> {
    let headers = new HttpHeaders({'Content-type': 'application/json',Accept:'application/json','Access-Control-Allow-Origin': 'http://localhost:4200'});
    return this.http.post(link, data).pipe(map((response: Response) => {
      return response.json(); }));
  }
}
