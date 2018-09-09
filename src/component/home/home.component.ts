import { Component } from '@angular/core';
import { AppSettings } from '../../config/app.config';
import { Authentication } from '../../service/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
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
    private http: HttpClient, private userservice: UserService, private router: Router) {

    if (this.activatedroute.snapshot.queryParams['code'] !== undefined && localStorage.getItem('access_token') == null) {
      this.formData.append('grant_type', 'authorization_code');
      this.formData.append('code', this.activatedroute.snapshot.queryParams['code']);
      this.formData.append('client_id', this.appsettings.client_id);
      this.formData.append('client_secret', this.appsettings.client_secret);
      this.formData.append('redirect_uri', this.appsettings.redirect_uri);

      this.authentication.post(this.appsettings.tokenUri, null , this.formData).subscribe((data: any) => {
        localStorage.setItem('access_token', data.result.data.access_token);
        localStorage.setItem('refresh_token', data.result.data.refresh_token);

        this.authentication.get(this.appsettings.codeChefApiBaseUrl + 'users/me', 'private').subscribe((userdata: any) => {

        this.userservice.userData = userdata.result.data.content;
        sessionStorage.setItem('userData', JSON.stringify(userdata.result.data.content));
          this.router.navigate(['']);
      });
      });
    }


  }


  get isUserLogging(): boolean {
    return this.userservice.isUser();
  }

  get getUserGlobalRanking(): any {
    return <Number>(JSON.parse(sessionStorage.getItem('userData')) !== null ?
        JSON.parse(sessionStorage.getItem('userData')).rankings.allContestRanking.global : null);
  }

  get getUserCountryRanking(): any {
    return <Number>(JSON.parse(sessionStorage.getItem('userData')) !== null ?
        JSON.parse(sessionStorage.getItem('userData')).rankings.allContestRanking.country : null);
  }
  get getUserSuccessfullProblemSolved(): any {
    return <Number>JSON.parse(sessionStorage.getItem('userData')) !== null ?
    JSON.parse(sessionStorage.getItem('userData')).submissionStats.solvedProblems : null;
  }

  get getUserRating(): any {
    return <Number>JSON.parse(sessionStorage.getItem('userData')) !== null ?
    JSON.parse(sessionStorage.getItem('userData')).ratings.allContest : null;
  }

}
