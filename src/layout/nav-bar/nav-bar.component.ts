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

  }

  login() {
    window.location.href = 'https://api.codechef.com/oauth/authorize?response_type=code&client_id=983f0d084572c13255d514c32564de9f&state=xyz&redirect_uri=http://localhost:4200';
  }


}
