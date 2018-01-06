import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the GeolocationMapsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

declare var google;

@IonicPage()
@Component({
  selector: 'page-geolocation-maps',
  templateUrl: 'geolocation-maps.html',
})
export class GeolocationMapsPage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {

    this.geolocation.getCurrentPosition().then((position) => {

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      this.addMarker();
    }, (err) => {
      console.log(err);
    });

  }

  addMarker() {
    let prompt = this.alertCtrl.create({
      title: 'Nova marcação',
      message: "Qual a informação para a marcação",
      inputs: [
        {
          name: 'informacao',
          placeholder: 'Informação'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
          }
        },
        {
          text: 'Salvar',
          handler: data => {

          }
        }
      ]
    });
    prompt.present();
  }

  addInfoWindow(marker, content) {

    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

  }

}
