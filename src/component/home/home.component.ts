import { Component, OnInit, NgZone } from '@angular/core';
import { AppSettings } from '../../config/app.config';
import { Authentication } from '../../service/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {

  httpOptions: any = {};
  contestsList: any = [];

  /* Animated Card */
  userData: any = null;

  constructor(private appsettings: AppSettings, private authentication: Authentication, private activatedroute: ActivatedRoute,
    private userservice: UserService, private zone: NgZone, private spinner: NgxSpinnerService,
    private router: Router) {
    this.spinner.show();
    if (this.activatedroute.snapshot.queryParams['code'] !== undefined && localStorage.getItem('access_token') == null) {
      let formData;
      formData = new FormData();
      formData.append('grant_type', 'authorization_code');
      formData.append('code', this.activatedroute.snapshot.queryParams['code']);
      formData.append('client_id', this.appsettings.client_id);
      formData.append('client_secret', this.appsettings.client_secret);
      formData.append('redirect_uri', this.appsettings.redirect_uri);
      this.spinner.show();
      this.authentication.post(this.appsettings.tokenUri, null, formData).subscribe((data: any) => {
        localStorage.setItem('access_token', data.result.data.access_token);
        localStorage.setItem('refresh_token', data.result.data.refresh_token);
        localStorage.setItem('scope', data.result.data.scope);
        this.authentication.get(this.appsettings.codeChefApiBaseUrl + 'users/me', 'private').subscribe((userdata: any) => {
          this.spinner.hide();
          localStorage.setItem('userData', JSON.stringify(userdata.result.data.content));
          this.userservice.userData.next(JSON.parse(localStorage.getItem('userData')));
          this.userservice.userData.subscribe((value) => {
            this.zone.run(() => {
              window.location.reload();
            });
          }, (error) => {
            this.spinner.hide();
          });
        });
      }, (error) => {
        this.spinner.hide();
      });
    }
  }

  ngOnInit() {
    this.userservice.userData.subscribe((value) => {
      this.zone.run(() => {
        this.userData = value;
      });
    });
    if (localStorage.getItem('access_token') !== null) {
      this.spinner.show();
      this.authentication.get(this.appsettings.codeChefApiBaseUrl + 'contests?status=present', 'private').subscribe((data: any) => {
        this.spinner.hide();
        if (data.result.data.code === 9001) {
          localStorage.setItem('temp', JSON.stringify(data.result.data.content.contestList));
          this.zone.run(() => {
            this.contestsList = data.result.data.content.contestList;
          });
        } else {
        }
      }, (error) => {
        this.spinner.hide();
        this.userservice.refreshToken(error);
      });

      this.spinner.show();

      this.authentication.get(this.appsettings.codeChefApiBaseUrl + 'users/me', 'private').subscribe((userdata: any) => {
        this.spinner.hide();
        localStorage.setItem('userData', JSON.stringify(userdata.result.data.content));
        this.userservice.userData.next(JSON.parse(localStorage.getItem('userData')));
      }, (error) => {
        this.spinner.hide();
        this.userservice.refreshToken(error);
      });
    }
  }
  get getUserGlobalRanking(): any {
    return <Number>this.userData !== null ?
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

  goContestPage(contest) {
    this.router.navigate(['contest/', contest.code]);
  }
}
