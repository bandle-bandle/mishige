import { Component, OnInit } from '@angular/core';
import { NavController, AlertController , LoadingController} from '@ionic/angular';
import * as firebase from 'firebase';
@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage implements OnInit {
  authdata: { email: string, password: string } = { email: '', password: '' };
  solo_account_data: { 
    age: number,
    area: string,
    avator_url: string,
    email: string,
    favorit_genre: any,
    part: any,
    profile: string,
    sex: string,
    user_name: string
  } = { 
    age: 0,
    area: '',
    avator_url: '',
    email: '',
    favorit_genre: [],
    part: [],
    profile: '',
    sex: '',
    user_name: ''
  };
  solo_account_id:string ='';
  loader = null;
  constructor(
    public navCtrl: NavController,
    public alertController: AlertController,
    public loadingCtrl: LoadingController
    ) { }
    async signUp() {
      try {
        this.presentLoading();
        this.solo_account_data.email = this.authdata.email;
        await firebase.firestore().doc('solo_account/'+this.solo_account_id).set(this.solo_account_data);
        await firebase.auth().createUserWithEmailAndPassword(this.authdata.email, this.authdata.password);
        this.navCtrl.navigateRoot('home');
  
      } catch (error) {
        let db = await firebase.firestore().doc('solo_account/'+this.solo_account_id);
        if(db !=null){
          db.delete();
        }
        const alert = await this.alertController.create({
          header: '警告',
          message: error.message,
          buttons: ['OK']
        });
        this.loadingCtrl.dismiss(); 
        alert.present();
      }
    }

    async presentLoading() {
      this.loader = await this.loadingCtrl.create({
        spinner: 'bubbles',
        message:'ロード中'
    });
      // ローディング画面を表示
      this.loader.present();
    }
  ngOnInit() {
  }
  checkExistUserId(){

  }
}
