import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import {AppComponent } from '../../app.component';
import * as firebase from 'Firebase';

@Component({
  selector: 'app-talk-room',
  templateUrl: './talk-room.page.html',
  styleUrls: ['./talk-room.page.scss'],
})
export class TalkRoomPage implements OnInit {

  roomkey: string;
  nickname: string;
  chatMessage: string;
  roomId: string;

  chats = [];
  offStatus = false;

  //@ViewChild(Content) content: Content;

  constructor(public navCtrl: NavController, public route: ActivatedRoute) {
    firebase.database().ref('/chatrooms/'+this.roomId).on('value',resp => {
    var database = firebase.database();
    var ref = database.ref('/chatrooms/'+this.roomId);
    ref.on()
      alert(resp);
    });
  }
 
  ngOnInit() {
    this.roomId = this.router.snapshot.paramMap.get('id') as string;
  }

  displayChatMessage() {
    firebase.database()
      .ref('chatrooms/' + this.roomkey + '/chats')
      .on('value', resp => {

        if (resp) {
          this.chats = [];
          resp.forEach(childSnapshot => {
            const chat = childSnapshot.val();
            chat.key = childSnapshot.key;
            this.chats.push(chat);
          });
          setTimeout(async () => {
            if (this.offStatus === false) {
              // FIX-ME
              // V4でコンテンツエリアをスクロールする方法が分からない
              //const el = await this.content.getScrollElement();
              //el.scrollToBottom(300);
            }
          });
        }
      });
  }

  sendChatMessage(){
    this.sendMessage('message', this.chatMessage);
  }

  sendJoinMessage() {
    this.sendMessage('join', this.nickname + ' has joined this room.');
  }

  sendExitMessage() {
    this.sendMessage('exit', this.nickname + ' has exited this room.');
  }

  sendMessage(type: string, message: string){
    const newData = firebase.database().ref('chatrooms/' + this.roomkey + '/chats').push();
    newData.set({
      type: type,
      user: this.nickname,
      message: message,
      sendDate: Date()
    })
  }
}
