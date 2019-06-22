import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, LoadingController} from '@ionic/angular';
import * as firebase from 'firebase';

@Component({
  selector: 'app-inquiry-band-account',
  templateUrl: './inquiry-band-account.page.html',
  styleUrls: ['./inquiry-band-account.page.scss'],
})

export class InquiryBandAccountPage implements OnInit {
  data: { user: string, message: string } = { user: '', message: '' };
  loader = null;
  constructor(public navCtrl: NavController,
    public alertController: AlertController,
     public loadingCtrl: LoadingController
    ) {}
    
    sendMessage() {
      this.navCtrl.navigateRoot('message');
      this.navCtrl.navigateRoot('talk-room');
    }
    
  ngOnInit() {
  }

}
