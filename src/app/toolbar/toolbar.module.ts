import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ToolbarComponent} from'./toolbar.component';
@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  
  exports:[ToolbarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ToolbarModule { }
