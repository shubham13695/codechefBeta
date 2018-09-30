import { Component } from '@angular/core';
import { Authentication } from '../../service/authentication.service';
import { AppSettings } from '../../config/app.config';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-problem',
    templateUrl: 'problem.component.html',
    styleUrls: ['problem.component.css'],
})
export class ProblemComponent  {
    constructor(private appSettings: AppSettings, private authentication: Authentication, private activatedroute: ActivatedRoute) {
        console.log('Test');
        this.authentication.get(this.appSettings.codeChefApiBaseUrl + 'contests/' + this.activatedroute.snapshot.params['contestcode'] +
        '/problems/' + this.activatedroute.snapshot.params['problemcode'] , 'private').subscribe((data) => {
            console.log(data);
        }, (error) => {
            console.log(error);
        } );
    }
}
