import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InquiryContributionPage } from './inquiry-contribution.page';

const routes: Routes = [
  {
    path: '',
    component: InquiryContributionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InquiryContributionPage]
})
export class InquiryContributionPageModule {}
