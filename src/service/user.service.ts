import { Injectable } from '@angular/core';
import { AppSettings } from '../config/app.config';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class UserService {

    userData: BehaviorSubject<any> = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('userData')) !== null ?
    JSON.parse(localStorage.getItem('userData')) : null);
    contests: any;
    // isUserLogging: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    subject: Observable<Boolean>;

    constructor(private appsetting: AppSettings) {
    }
    isUser() {
        return localStorage.getItem('access_token') !== null ? true : false;
    }


    // getUserName() {
    //     return JSON.parse(localStorage.getItem('userData')) !== null ?
    //         JSON.parse(localStorage.getItem('userData')).username : null;
    // }

    // getUserGlobalRanking(): any {
    //     return JSON.parse(localStorage.getItem('userData')) !== null ?
    //         JSON.parse(localStorage.getItem('userData')).rankings.allContestRanking.global : null;
    // }
    // getUserCountryRanking(): any {
    //     return JSON.parse(localStorage.getItem('userData')) !== null ?
    //         JSON.parse(localStorage.getItem('userData')).rankings.allContestRanking.country : null;
    // }
    // getUserSuccessfullProblemSolved(): any {
    //     return JSON.parse(localStorage.getItem('userData')) !== null ?
    //         JSON.parse(localStorage.getItem('userData')).submissionStats.solvedProblems : null;
    // }

    // getUserRating(): any {
    //     return JSON.parse(localStorage.getItem('userData')) !== null ?
    //         JSON.parse(localStorage.getItem('userData')).ratings.allContest : null;
    // }
}
