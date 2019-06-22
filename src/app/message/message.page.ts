import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';
import { AppComponent } from '../app.component';
import * as firebase from 'firebase';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})

export class MessagePage implements OnInit {
  bandTabSelectedClass: boolean = false;
  soloTabSelectedClass: boolean = false;
  constructor(public navCtrl: NavController) { }

  rooms = [];

  ngOnInit() {
    this.bandTabSelectedClass = true;
    this.soloTabSelectedClass = false;

    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        firebase.database().ref('chatrooms/').on('value', resp => {
          if(resp) {
            this.rooms = [];
            resp.forEach(childSnapshot => {
              const room = childSnapshot.val();
              room.key = childSnapshot.key;
              this.rooms.push(room);
            });
          }
        });
      }
    });
  }

  bandTab(){
    this.bandTabSelectedClass = true;
    this.soloTabSelectedClass = false;
  }

  soloTab(){
    this.bandTabSelectedClass = false;
    this.soloTabSelectedClass = true;
  }

  joinRoom(key){
    this.navCtrl.navigateForward('talk-room'+'id')
    alert(this.id);
  }
}
