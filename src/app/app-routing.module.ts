import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'signin', loadChildren: './signin/signin.module#SigninPageModule' },
  { path: 'create-account', loadChildren: './create-account/create-account.module#CreateAccountPageModule' },
  { path: 'search', loadChildren: './search/search.module#SearchPageModule' },
  { path: 'message', loadChildren: './message/message.module#MessagePageModule' },
  { path: 'schedule', loadChildren: './schedule/schedule.module#SchedulePageModule' },
  { path: 'config', loadChildren: './config/config.module#ConfigPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'inquiry-contribution', loadChildren: './inquiry/inquiry-contribution/inquiry-contribution.module#InquiryContributionPageModule' },
  { path: 'inquiry-solo-account', loadChildren: './inquiry/inquiry-solo-account/inquiry-solo-account.module#InquirySoloAccountPageModule' },
  { path: 'inquiry-band-account', loadChildren: './inquiry/inquiry-band-account/inquiry-band-account.module#InquiryBandAccountPageModule' },
  { path: 'talk-room', loadChildren: './message/talk-room/talk-room.module#TalkRoomPageModule' }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
