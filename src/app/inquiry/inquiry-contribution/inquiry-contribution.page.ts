import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';
@Component({
  selector: 'app-inquiry-contribution',
  templateUrl: './inquiry-contribution.page.html',
  styleUrls: ['./inquiry-contribution.page.scss'],
})
export class InquiryContributionPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  inquiry(){
    this.navCtrl.navigateForward('inquiry-band-account');
  }
}
