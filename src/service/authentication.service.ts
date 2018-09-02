import { Injectable} from '@angular/core';
import { Http } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable()
export class Authentication {

  constructor(private http: Http) {

  }

  post(link) {
    let data = {
      data: 12
    };
    window.location.href ='https://api.codechef.com/oauth/authorize?response_type=code&client_id=983f0d084572c13255d514c32564de9f&state=xyz&redirect_uri=http://localhost:4200';
    // window.location('https://api.codechef.com/oauth/authorize?response_type=code&client_id=983f0d084572c13255d514c32564de9f&state=xyz&redirect_uri=http://localhost:4200');
    // header('Access-Control-Allow-Headers: Content-Type, x-xsrf-token, x_csrftoken');
    return this.http.get('https://api.codechef.com/oauth/authorize?response_type=code&client_id=983f0d084572c13255d514c32564de9f&state=xyz').pipe(map((response: Response) => {
    console.log(response);
    }));
  }
  // post(link, data): Observable<any> {
  //   let headers = new HttpHeaders({'Content-type': 'application/json',Accept:'application/json','Access-Control-Allow-Origin': 'http://localhost:4200'});
  //   return this.http.post(link, data).pipe(map((response: Response) => {
  //     return response.json(); }));
  // }
}
