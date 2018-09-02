
import { Routes } from '@angular/router';
import { HomeComponent } from '../component/home/home.component';
import { LoginComponent } from '../component/login/login.component';

export const AppRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent}
  ];

