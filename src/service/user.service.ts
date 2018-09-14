import { Injectable } from '@angular/core';
import { AppSettings } from '../config/app.config';
import { Observable, BehaviorSubject } from 'rxjs';
import { Authentication } from './authentication.service';

@Injectable()
export class UserService {

    userData: BehaviorSubject<any> = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('userData')) !== null ?
    JSON.parse(localStorage.getItem('userData')) : null);
    contests: any;
    // isUserLogging: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    subject: Observable<Boolean>;

    constructor(private appsettings: AppSettings, private authentication: Authentication) {
    }
    isUser() {
        return localStorage.getItem('access_token') !== null ? true : false;
    }

    logout() {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('userData');
        localStorage.removeItem('temp');
        localStorage.removeItem('scope');
        window.location.reload();
    }


  refreshToken(error) {

    if (error.status === 401 && localStorage.getItem('access_token') !== null) {
      let formData;
      formData = new FormData();
      formData.append('grant_type', 'refresh_token');
      formData.append('refresh_token', localStorage.getItem('refresh_token'));
      formData.append('client_id', this.appsettings.client_id);
      formData.append('client_secret', this.appsettings.client_secret);
      formData.append('redirect_uri', this.appsettings.redirect_uri);
      this.authentication.post(this.appsettings.tokenUri, null, formData).subscribe((data: any) => {
        localStorage.setItem('access_token', data.result.data.access_token);
        localStorage.setItem('refresh_token', data.result.data.refresh_token);
        localStorage.setItem('scope', data.result.data.scope);
        this.authentication.get(this.appsettings.codeChefApiBaseUrl + 'users/me', 'private').subscribe((userdata: any) => {
          localStorage.setItem('userData', JSON.stringify(userdata.result.data.content));
          this.userData.next(JSON.parse(localStorage.getItem('userData')));
          this.userData.subscribe((value) => {
              window.location.reload();
          });
        });
      });

    } else {
      this.logout();
      this.userData.next(null);
    }
  }

}
