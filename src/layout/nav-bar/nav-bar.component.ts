import { Component } from '@angular/core';

import { AppSettings } from '../../config/app.config';
import { UserService } from '../../service/user.service';
import { ActivatedRoute, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: 'nav-bar.component.html',
  styleUrls: ['nav-bar.component.css'],
})
export class NavBarComponent {
  form: any;
  getUserName: any;
  isUserLogging: boolean;
  currentUrl: any = 'home';


  constructor(private userservice: UserService, private appsetting: AppSettings, private activatedroute: ActivatedRoute,
    private router: Router) {
    this.currentUrl = (location.toString()).split('/').lastIndexOf;
    let url;
    url = (location.toString()).split('/');
    this.currentUrl = url[url.length - 1];
    this.userservice.userData.subscribe((data) => {
      if (data !== null) {
        this.getUserName = data.username;
        this.isUserLogging = true;
      } else {
        this.isUserLogging = false;
      }
    });
  }

  login() {
    window.location.href = this.appsetting.codeChefAuthorizeApi +
      '?response_type=code&client_id=' + this.appsetting.client_id + '&state=xyz&redirect_uri=' + this.appsetting.redirect_uri;
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('userData');
    localStorage.removeItem('temp');
    localStorage.removeItem('scope');
    this.userservice.userData.next(null);
    // window.location.reload();
  }
}
