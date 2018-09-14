import { Component } from '@angular/core';
import { AppSettings } from '../config/app.config';
import { Authentication } from '../service/authentication.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'betaApp';
  formData = new FormData();

  constructor(private authentication: Authentication, private appsettings: AppSettings, private spinner: NgxSpinnerService) {
    this.formData.append('grant_type', 'client_credentials');
    this.formData.append('client_id', this.appsettings.client_id);
    this.formData.append('client_secret', this.appsettings.client_secret);
    this.formData.append('scope', 'public');
    this.formData.append('redirect_uri', this.appsettings.redirect_uri);


    if (!localStorage.getItem('public_key')) {
      this.authentication.post(this.appsettings.tokenUri, null, this.formData)
        .subscribe((data: any) => {
          this.spinner.hide();
          localStorage.setItem('public_key', data.result.data.access_token);
            this.authentication.get(this.appsettings.codeChefApiBaseUrl, 'public');
        });
    }
  }
}
