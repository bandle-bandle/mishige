import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { EventComponent} from './event.component';
import {FormsModule} from "@angular/forms"; 
@NgModule({
  declarations: [EventComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports:[EventComponent],
  entryComponents: [
    EventComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EventModule { }
