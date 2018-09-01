import { Component } from '@angular/core';
import { Authentication } from '../../service/authentication.service';
import {AppSettings} from '../../config/app.config';
// import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-nav-bar',
  templateUrl: 'nav-bar.component.html',
})
export class NavBarComponent  {
  form: any;
  constructor(private authentication: Authentication, private appsettings: AppSettings) {
    // private http: HttpClient)

  }

  login() {
    this.form = {
      grant_type: 'client_credentials',
      client_id: this.appsettings.client_id,
      client_secret: this.appsettings.client_secret,
      // response_type: 'code',
      scope: 'public',
      redirect_uri: 'http://localhost:4200',
    };

    this.authentication.post(this.appsettings.clientCridential, this.form)
      .subscribe((data) => {
      console.log(data);
    });
  }


}
