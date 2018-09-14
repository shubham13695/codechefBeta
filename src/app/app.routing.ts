
import { Routes } from '@angular/router';
import { HomeComponent } from '../component/home/home.component';
import { PageNotFoundComponent } from '../component/PageNotFoundComponent/PageNotFound.component';
import { ContestComponent } from '../component/contest/contest.component';


export const AppRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home/src/OAuth2', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'contest/:contestcode' , component: ContestComponent},
    { path: '**' , component: PageNotFoundComponent},
  ];

