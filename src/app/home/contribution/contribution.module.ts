import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContributionComponent } from './contribution.component';
@NgModule({
  declarations: [ContributionComponent],
  imports: [
    CommonModule
  ],
  exports:[ContributionComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContributionModule { }
