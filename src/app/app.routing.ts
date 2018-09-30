
import { Routes } from '@angular/router';
import { HomeComponent } from '../component/home/home.component';
import { PageNotFoundComponent } from '../component/PageNotFoundComponent/PageNotFound.component';
import { ContestComponent } from '../component/contest/contest.component';
import { ProblemComponent } from '../component/problem/problem.component';
import { AboutUsComponent } from '../component/aboutus/aboutus.component';
// import { TestComponent } from '../component/Test/test.component';

export const AppRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'}, /*base href redirect to home*/
    { path: 'home', component: HomeComponent }, /* Home page*/
    { path: 'contests/:contestcode' , component: ContestComponent}, /* Load contest*/
    { path: 'contests/:contestcode/problems/:problemcode' , component: ProblemComponent}, /*load problems*/
    { path: 'contact-us' , component: AboutUsComponent},
    // { path: 'test' , component: TestComponent}, use tesseract js to convert image to text.
    { path: '**' , component: PageNotFoundComponent}, /*404 page*/
  ];

