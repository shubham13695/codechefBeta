import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Authentication } from '../../service/authentication.service';
import { AppSettings } from '../../config/app.config';
import { UserService } from '../../service/user.service';
import { NgxSpinnerService } from 'ngx-spinner';

declare var $: any;

@Component({
    selector: 'app-list-contest',
    templateUrl: 'contest.component.html',
    styleUrls: ['contest.component.css'],
})

export class ContestComponent implements OnInit {
    contest: any = {
        bannerFile: '../../assets/images/project-5.jpg',
    };
    constructor(private activatedroute: ActivatedRoute, private authentication: Authentication, private appSettings: AppSettings,
        private userService: UserService , private spinner: NgxSpinnerService) {
        this.spinner.show();
        this.authentication.get(this.appSettings.codeChefApiBaseUrl + '/contests/' +
            this.activatedroute.snapshot.params['contestcode'], 'private').subscribe((data: any) => {
                this.spinner.hide();
            console.log(data);
                this.contest = data.result.data.content;
            }, (error) => {
                this.userService.refreshToken(error);
            });

    }
    ngOnInit() {
        $.getScript('../../assets/js/main.js');
    }
    goProblemPage(problemCode) {
        console.log(problemCode);
    }
}
