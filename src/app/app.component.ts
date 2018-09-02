import { Component } from '@angular/core';
import { AppSettings } from '../config/app.config';
import { Authentication } from '../service/authentication.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'betaApp';
  form: any;



  constructor(private authentication: Authentication, private appsettings: AppSettings) {
    this.form = {
      grant_type: 'client_credentials',
      client_id: this.appsettings.client_id,
      client_secret: this.appsettings.client_secret,
      scope: 'public',
      redirect_uri: 'http://localhost:4200',
    };

    // if (!localStorage.getItem('public_key')) {
    //   this.authentication.post(this.appsettings.clientCridential, this.form)
    //     .subscribe((data) => {
    //       localStorage.setItem('public_key', data.result.data.access_token);
    //     });
    // }
  }
}
