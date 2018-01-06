import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Network} from '@ionic-native/network';

/**
 * Generated class for the NetworkPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-network',
  templateUrl: 'network.html',
})
export class NetworkPage {
  public wifi: boolean = false;
  public mobile: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private network: Network) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NetworkPage');
  }

  testConnection(){
    // watch network for a connection
    this.network.onConnect().subscribe(() => {
      console.log('network connected!');
      // We just got a connection but we need to wait briefly
      // before we determine the connection type. Might need to wait.
      // prior to doing any api requests as well.
        if (this.network.type === 'wifi') {
          this.wifi = true;
        }else{
          this.mobile = true;
        }
    });
  }

  watchConnection(){
    this.network.onchange().subscribe(() => {
    console.log('network connected!');
    // We just got a connection but we need to wait briefly
    // before we determine the connection type. Might need to wait.
    // prior to doing any api requests as well.
      if (this.network.type === 'wifi') {
        this.wifi = true;
        this.mobile = false;
      }else{
          this.mobile = true;
          this.wifi = false;
        }
  });
  }

}
