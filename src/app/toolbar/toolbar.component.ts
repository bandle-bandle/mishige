import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})

export class ToolbarComponent implements OnInit {
  homeSelectedClass: boolean = false;
  searchSelectedClass: boolean = false;
  messageSelectedClass: boolean = false;
  scheduleSelectedClass: boolean = false;
  configSelectedClass: boolean = false;
  constructor(
    public navCtrl: NavController,
    private route: ActivatedRoute,
    public alertController: AlertController
    ) {
      
      
      this.homeSelectedClass = true;
      this.searchSelectedClass = false;
      this.messageSelectedClass = false;
      this.scheduleSelectedClass = false;
      this.configSelectedClass = false;
    }

  ngOnInit() {
    console.log("URL"+this.route.pathFromRoot);
    
    this.homeSelectedClass = true;
    this.searchSelectedClass = false;
    this.messageSelectedClass = false;
    this.scheduleSelectedClass = false;
    this.configSelectedClass = false;
  }
  async timeline() {
    this.homeSelectedClass = true;
    this.searchSelectedClass = false;
    this.messageSelectedClass = false;
    this.scheduleSelectedClass = false;
    this.configSelectedClass = false;
    this.navCtrl.navigateRoot('home');
  }
  async search() {
    this.homeSelectedClass = false;
    this.searchSelectedClass = true;
    this.messageSelectedClass = false;
    this.scheduleSelectedClass = false;
    this.configSelectedClass = false;
    this.navCtrl.navigateRoot('search');
  }
  async message() {
    this.homeSelectedClass = false;
    this.searchSelectedClass = false;
    this.messageSelectedClass = true;
    this.scheduleSelectedClass = false;
    this.configSelectedClass = false;
    this.navCtrl.navigateRoot('message');
  }
  async schedule() {
    this.homeSelectedClass = false;
    this.searchSelectedClass = false;
    this.messageSelectedClass = false;
    this.scheduleSelectedClass = true;
    this.configSelectedClass = false;
    this.navCtrl.navigateRoot('schedule');
  }
  async config() {
    this.homeSelectedClass = false;
    this.searchSelectedClass = false;
    this.messageSelectedClass = false;
    this.scheduleSelectedClass = false;
    this.configSelectedClass = true;
    this.navCtrl.navigateRoot('config');
  }
}
