import { Component } from '@angular/core';
import { AppSettings } from '../../config/app.config';
import { Authentication } from '../../service/authentication.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
})
export class HomeComponent  {

  constructor(private appsettings: AppSettings, private authentication: Authentication) {
    // this.authentication.get(this.appsettings.codeChefApiBaseUrl + 'contests?status=present')
    // .subscribe((data) => {
    //   console.log(data);
    //   // localStorage.setItem('public_key', data.result.data.access_token);
    // });
    // this.authentication.post('http://127.0.0.1:8000/api/ok').subscribe((data) => console.log(data));
  }


}
