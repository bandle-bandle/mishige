import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TalkRoomPage } from './talk-room.page';

const routes: Routes = [
  {
    path: ':id',
    component: TalkRoomPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TalkRoomPage]
})
export class TalkRoomPageModule {}
