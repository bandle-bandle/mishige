import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, LoadingController} from '@ionic/angular';
import * as firebase from 'firebase';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  data: { email: string, password: string } = { email: '', password: '' };
  loader = null;
  constructor(public navCtrl: NavController,
    public alertController: AlertController,
     public loadingCtrl: LoadingController
    ) {}
    
    async signIn() {
      try {
        this.presentLoading(); 
        await firebase
          .auth()
          .signInWithEmailAndPassword(this.data.email, this.data.password);
  
        this.navCtrl.navigateRoot('home');
  
      } catch (error) {
        const alert = await this.alertController.create({
          header: 'エラー',
          message: '入力に誤りがあります',
          buttons: ['OK']
        });
        this.loadingCtrl.dismiss(); 
        alert.present();
      }
    }
    signUp() {
      this.navCtrl.navigateForward('create-account');
    }
    async presentLoading() {
      this.loader = await this.loadingCtrl.create({
        spinner: 'bubbles',
        message:'ロード中',
        cssClass: 'loading-class'
    });
      // ローディング画面を表示
      this.loader.present();
    }
    
  ngOnInit() {
  }

}
