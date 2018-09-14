
import { Routes } from '@angular/router';
import { HomeComponent } from '../component/home/home.component';
import { PageNotFoundComponent } from '../component/PageNotFoundComponent/PageNotFound.component';
import { ContestComponent } from '../component/contest/contest.component';


export const AppRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'contest/:contestcode' , component: ContestComponent},
    { path: '**' , component: PageNotFoundComponent},
  ];

