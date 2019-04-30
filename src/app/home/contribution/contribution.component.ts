import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-contribution',
  templateUrl: './contribution.component.html',
  styleUrls: ['./contribution.component.scss'],
})
export class ContributionComponent implements OnInit {
  plusClass: boolean = true;
  thumnailViewClass: boolean = false;
  thumnailUrl: string = "../../assets/plus.PNG";
  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {}

  thumnail(){
    this.presentPrompt();

  }
  private getThumnailImage(url): string{
    let videoCode = url.split('=');
    let generateUrl = 'http://img.youtube.com/vi/'+videoCode[1]+'/default.jpg';
    return generateUrl;
  }
  async presentPrompt() {
    const alert = await this.alertCtrl.create({
      header: 'コンテンツ選択',
      inputs: [
        {
          name: 'url',
          type: 'text',
          placeholder: 'URL'
        }
      ],
      message: 'YouTubeの動画URLを指定',
      buttons: [
        {
          text: 'キャンセル',
          role: 'cancel',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: '選択',
          handler:  data => {
            console.log('Confirm Ok');
            this.plusClass = false;
            this.thumnailViewClass = true;
            this.thumnailUrl = this.getThumnailImage(data.url);
          }
        }
      ],
      cssClass:'alertClass'
    });

    await alert.present();
  }
}
