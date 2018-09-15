import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
    selector: 'app-aboutus',
    templateUrl: 'aboutus.component.html',
    styleUrls: ['aboutus.component.css'],
})
export class AboutUsComponent implements OnInit  {

    ngOnInit() {
       $.getScript('../../assets/js/main.js');
    }
}
