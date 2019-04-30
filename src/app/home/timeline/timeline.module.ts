import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './timeline.component';
@NgModule({
  declarations: [TimelineComponent],
  imports: [
    CommonModule
  ],
  exports:[TimelineComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TimelineModule { }
