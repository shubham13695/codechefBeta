
import { Routes } from '@angular/router';
import { HomeComponent } from '../component/home/home.component';
import { PageNotFoundComponent } from '../component/PageNotFoundComponent/PageNotFound.component';

export const AppRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home/src/OAuth2', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: '**' , component: PageNotFoundComponent}
  ];

