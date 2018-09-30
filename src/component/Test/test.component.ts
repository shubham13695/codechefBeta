import { Component, OnInit } from '@angular/core';

declare var $: any;
declare var Tesseract: any;
@Component({
    selector: 'app-text',
    templateUrl: 'test.component.html',
})
export class TestComponent implements OnInit  {
constructor() {
}
ngOnInit() {
    $.getScript('https://cdn.rawgit.com/naptha/tesseract.js/0.2.0/dist/tesseract.js');
    Tesseract.recognize('../../assets/images/loc.png')
    .then(function(result) {
console.log(result.text);
    }).progress(function(result) {
        $(document).getElementById('ocr_status').innerText = result['status'] + '(' +
            (result['progress'] * 100) + '%)';
   });

}
}
