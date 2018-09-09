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
  constructor(private appsettings: AppSettings, private userservice: UserService) {

  }

  login() {
    this.userservice.login();
  }

  logout() {
    this.userservice.logout();
    window.location.reload();
  }

  get isUserLogging(): boolean {
    return this.userservice.isUser();
  }

  get getUserName(): any {
    return this.userservice.getUserName();
  }
}
