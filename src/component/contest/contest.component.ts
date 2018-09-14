import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Authentication } from '../../service/authentication.service';
import { AppSettings } from '../../config/app.config';
import { UserService } from '../../service/user.service';
@Component({
    selector: 'app-list-contest',
    templateUrl: 'contest.component.html',
})
export class ContestComponent  {
    constructor(private activatedroute: ActivatedRoute, private authentication: Authentication, private appSettings: AppSettings,
                private userService: UserService ) {
        console.log(this.activatedroute);
        this.authentication.get(this.appSettings.codeChefApiBaseUrl + '/contests/' +
        this.activatedroute.snapshot.params['contestcode'], 'private').subscribe((data) => {
            console.log(data);
        }, (error) => {
            this.userService.refreshToken(error);
        });

    }

}
