import { Injectable } from '@angular/core';
import { AppSettings } from '../config/app.config';
import { Router } from '@angular/router';

@Injectable()
export class UserService {

    userData: any;
    contests: any;

    constructor(private appsetting: AppSettings, private router: Router) {

    }
    isUser() {
        return localStorage.getItem('access_token') !== null ? true : false;
    }

    login() {
        window.location.href = this.appsetting.codeChefAuthorizeApi +
            '?response_type=code&client_id=' + this.appsetting.client_id + '&state=xyz&redirect_uri=' + this.appsetting.redirect_uri;
    }
    logout() {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        sessionStorage.clear();
    }
    getUserName() {
        return JSON.parse(sessionStorage.getItem('userData')) !== null ?
            JSON.parse(sessionStorage.getItem('userData')).username : null;
    }

    getUserGlobalRanking(): any {
        return JSON.parse(sessionStorage.getItem('userData')) !== null ?
        JSON.parse(sessionStorage.getItem('userData')).rankings.allContestRanking.global : null;
    }
    getUserCountryRanking(): any {
        return JSON.parse(sessionStorage.getItem('userData')) !== null ?
        JSON.parse(sessionStorage.getItem('userData')).rankings.allContestRanking.country : null;
    }
    getUserSuccessfullProblemSolved(): any {
        return JSON.parse(sessionStorage.getItem('userData')) !== null ?
        JSON.parse(sessionStorage.getItem('userData')).submissionStats.solvedProblems : null;
    }

    getUserRating(): any {
        return JSON.parse(sessionStorage.getItem('userData')) !== null ?
        JSON.parse(sessionStorage.getItem('userData')).ratings.allContest : null;
    }
}
