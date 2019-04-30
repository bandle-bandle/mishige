import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';
@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss'],
})
export class RankingComponent implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {}
  inquiry(){

    this.navCtrl.navigateForward('inquiry-contribution');
  }
}
