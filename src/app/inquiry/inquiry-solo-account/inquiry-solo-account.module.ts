import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InquirySoloAccountPage } from './inquiry-solo-account.page';

const routes: Routes = [
  {
    path: '',
    component: InquirySoloAccountPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InquirySoloAccountPage]
})
export class InquirySoloAccountPageModule {}
