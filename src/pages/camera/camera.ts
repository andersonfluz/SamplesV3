import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';

/**
 * Generated class for the CameraPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {
  public base64Image: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
  }

  captureImage() {
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      targetWidth: 200,
      targetHeight: 200,
      allowEdit: true,
      cameraDirection: this.camera.Direction.FRONT,
      quality: 100
    }).then((imageData) => {
      this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (error) => {
      console.error(error);
    });
  }

  searchImage() {
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      targetWidth: 200,
      targetHeight: 200,
      quality: 60
    }).then((imageData) => {
      this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (error) => {
      console.error(error);
    });
  }

}
