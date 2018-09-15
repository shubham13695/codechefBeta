import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContestComponent } from '../contest/contest.component';
import { LayoutModule } from '../../layout/layout.module';

@NgModule({
    imports: [LayoutModule, CommonModule],
    declarations: [ ContestComponent ],
})
export class ContestModule {  }
