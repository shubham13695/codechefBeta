import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
    selector: 'app-list-contest',
    templateUrl: 'contest.component.html',
})
export class ContestComponent  {
    constructor(private activatedroute: ActivatedRoute) {
        console.log(this.activatedroute);
    }

}
