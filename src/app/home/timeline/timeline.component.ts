import { Component, OnInit, Output,EventEmitter} from '@angular/core';
import { NavController} from '@ionic/angular';
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
  constructor(public navCtrl: NavController) { }

  ngOnInit() {}
  
  timelineReload(){
    console.log('timelineReload');
  }
  inquiry(){

    this.navCtrl.navigateForward('inquiry-contribution');
  }
}
