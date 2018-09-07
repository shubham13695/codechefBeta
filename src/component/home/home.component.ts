import { Component } from '@angular/core';
import { AppSettings } from '../../config/app.config';
import { Authentication } from '../../service/authentication.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from '../../service/user.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
})
export class HomeComponent {
  formData = new FormData();
  httpOptions: any = {};
  constructor(private appsettings: AppSettings, private authentication: Authentication, private activatedroute: ActivatedRoute,
    private http: HttpClient, private userservice: UserService) {

    if (this.activatedroute.snapshot.queryParams['code'] !== undefined && localStorage.getItem('access_token') == null) {
      this.formData.append('grant_type', 'authorization_code');
      this.formData.append('code', this.activatedroute.snapshot.queryParams['code']);
      this.formData.append('client_id', this.appsettings.client_id);
      this.formData.append('client_secret', this.appsettings.client_secret);
      this.formData.append('redirect_uri', this.appsettings.redirect_uri);

      this.http.post(this.appsettings.tokenUri, this.formData).subscribe((data: any) => {
        localStorage.setItem('access_token', data.result.data.access_token);
        localStorage.setItem('refresh_token', data.result.data.refresh_token);
      });

      this.httpOptions = {
        headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('access_token'), 'Access-Control-Allow-Origin': '*' })
      };

      this.http.get('https://api.codechef.com/users/me', this.httpOptions).subscribe((data: any) => {
        this.userservice.userData = data.result.data.content;
        console.log(this.userservice.userData);
      });
    }
  }


}
