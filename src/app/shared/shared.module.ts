import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './spinner/spinner.component';

/**
 * This module is a central location for common modules needed by other application modules.
*/
@NgModule({
   imports: [
      CommonModule,
      MaterialModule,
      FormsModule,
      ReactiveFormsModule,
      FlexLayoutModule
   ],
   exports: [
      CommonModule,
      MaterialModule,
      FormsModule,
      ReactiveFormsModule,
      FlexLayoutModule,
      SpinnerComponent
   ],
   declarations: [ SpinnerComponent ]
   })
export class SharedModule { }
