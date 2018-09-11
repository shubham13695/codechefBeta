import { Component } from '@angular/core';

import { AppSettings } from '../../config/app.config';
import { UserService } from '../../service/user.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: 'nav-bar.component.html',
  styleUrls: ['nav-bar.component.css'],
})
export class NavBarComponent {
  form: any;
  getUserName: any;
  isUserLogging: boolean;

  constructor(private userservice: UserService , private appsetting: AppSettings) {
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
    this.userservice.userData.next(null);
    window.location.reload();
  }
}
