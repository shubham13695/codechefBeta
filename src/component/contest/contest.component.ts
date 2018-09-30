import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Authentication } from '../../service/authentication.service';
import { AppSettings } from '../../config/app.config';
import { UserService } from '../../service/user.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

declare var $: any;

@Component({
    selector: 'app-list-contest',
    templateUrl: 'contest.component.html',
    styleUrls: ['contest.component.css'],
})

export class ContestComponent implements OnInit {
    contest: any = {
        bannerFile: '../../assets/images/project-5.jpg',
        startDate: new Date(),
        endDate: new Date(),
    };
    constructor(private activatedroute: ActivatedRoute, private authentication: Authentication, private appSettings: AppSettings,
        private userService: UserService , private spinner: NgxSpinnerService, private router: Router) {
        this.spinner.show();
        this.authentication.get(this.appSettings.codeChefApiBaseUrl + 'contests/' +
            this.activatedroute.snapshot.params['contestcode'], 'private').subscribe((data: any) => {
                this.spinner.hide();
                this.contest = data.result.data.content;
                console.log(data.result);
            }, (error) => {
                this.userService.refreshToken(error);
            });

    }
    ngOnInit() {
        $.getScript('../../assets/js/main.js');
    }
    goProblemPage(problemCode) {
        console.log('inside');
        this.router.navigateByUrl('contests/' + this.activatedroute.snapshot.params['contestcode'] + '/problems/' + problemCode);
    }
}
