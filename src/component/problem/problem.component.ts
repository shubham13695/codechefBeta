import { Component } from '@angular/core';
import { Authentication } from '../../service/authentication.service';
import { AppSettings } from '../../config/app.config';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../service/user.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
    selector: 'app-problem',
    templateUrl: 'problem.component.html',
    styleUrls: ['problem.component.css'],
})
export class ProblemComponent  {
    problemDetails: string;
    problemName: string;
    authorName: string;
    constructor(private appSettings: AppSettings, private authentication: Authentication, private activatedroute: ActivatedRoute,
        private userservice: UserService , private spinner: NgxSpinnerService) {
        console.log('Test');
        this.authentication.get(this.appSettings.codeChefApiBaseUrl + 'contests/' + this.activatedroute.snapshot.params['contestcode'] +
        '/problems/' + this.activatedroute.snapshot.params['problemcode'] , 'private').subscribe((data: any) => {
            console.log(data.result);
            this.problemDetails = data.result.data.content.body;
            this.problemName = data.result.data.content.problemName;
            this.authorName = data.result.data.content.author;
        }, (error) => {
            this.spinner.hide();
            this.userservice.refreshToken(error);
        } );
    }
}
