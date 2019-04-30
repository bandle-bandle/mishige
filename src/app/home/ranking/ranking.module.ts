import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RankingComponent } from './ranking.component';
@NgModule({
  declarations: [RankingComponent],
  imports: [
    CommonModule
  ],
  exports:[RankingComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RankingModule { }
