import { Component } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
})
export class LoginComponent {
    constructor() {
        window.location.href = 'https://api.codechef.com/oauth/authorize?response_type=code&client_id=983f0d084572c13255d514c32564de9f&state=xyz&redirect_uri=http://localhost:4200';
    }
}