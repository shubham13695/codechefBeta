import { Component, OnInit, NgZone } from '@angular/core';
import { AppSettings } from '../../config/app.config';
import { Authentication } from '../../service/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
  formData = new FormData();
  httpOptions: any = {};
  contestsList: any = [];

  /* Animated Card */
  userData: any = null;

  constructor(private appsettings: AppSettings, private authentication: Authentication, private activatedroute: ActivatedRoute,
    private http: HttpClient, private userservice: UserService, private router: Router, private zone: NgZone) {

    if (this.activatedroute.snapshot.queryParams['code'] !== undefined && localStorage.getItem('access_token') == null) {
      this.formData.append('grant_type', 'authorization_code');
      this.formData.append('code', this.activatedroute.snapshot.queryParams['code']);
      this.formData.append('client_id', this.appsettings.client_id);
      this.formData.append('client_secret', this.appsettings.client_secret);
      this.formData.append('redirect_uri', this.appsettings.redirect_uri);

      this.authentication.post(this.appsettings.tokenUri, null, this.formData).subscribe((data: any) => {
        localStorage.setItem('access_token', data.result.data.access_token);
        localStorage.setItem('refresh_token', data.result.data.refresh_token);
        localStorage.setItem('scope', data.result.data.scope);
        this.authentication.get(this.appsettings.codeChefApiBaseUrl + 'users/me', 'private').subscribe((userdata: any) => {
          localStorage.setItem('userData', JSON.stringify(userdata.result.data.content));
          this.userservice.userData.next(JSON.parse(localStorage.getItem('userData')));
          this.userservice.userData.subscribe((value) => {
            this.zone.run(() => {
              window.location.reload();
            });
          });
        });
      });
    }
  }

  ngOnInit() {
    this.userservice.userData.subscribe((value) => {
      this.zone.run(() => {
        this.userData = value;
      });
    });
    if (localStorage.getItem('userData') !== null) {
    this.authentication.get(this.appsettings.codeChefApiBaseUrl + 'contests?status=present', 'private').subscribe((data: any) => {
      if (data.result.data.code === 9001) {
        localStorage.setItem('temp', JSON.stringify( data.result.data.content.contestList));
        this.zone.run(() => {
        this.contestsList = data.result.data.content.contestList;
        });
      } else {
      }
    });
    }
    // this.contestsList = JSON.parse(localStorage.getItem('temp'));
    this.userservice.userData.next(JSON.parse(localStorage.getItem('userData')) !== null ?
    JSON.parse(localStorage.getItem('userData')) : null);

  }
  get isUserLogging(): boolean {
    return this.userservice.isUser();
  }

  get getUserGlobalRanking(): any {
    return <Number> this.userData !== null ?
    this.userData.rankings.allContestRanking.global : null;
  }

  get getUserCountryRanking(): any {
    return <Number>this.userData !== null ?
      this.userData.rankings.allContestRanking.country : null;
  }
  get getUserSuccessfullProblemSolved(): any {
    return <Number>this.userData !== null ?
    this.userData.submissionStats.solvedProblems : null;
  }

  get getUserRating(): any {
    return <Number>this.userData !== null ?
    this.userData.ratings.allContest : null;
  }
}
