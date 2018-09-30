import { NgModule } from '@angular/core';

import { ProblemComponent } from './problem.component';
import {LayoutModule} from '../../layout/layout.module';

@NgModule({
    imports: [ LayoutModule ],
    declarations: [ ProblemComponent ],
})
export class ProblemModule {  }
