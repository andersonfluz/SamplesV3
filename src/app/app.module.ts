import { FirebaseListPage } from './../pages/firebase-list/firebase-list';
import { Network } from '@ionic-native/network';
import { QRScanner } from '@ionic-native/qr-scanner';
import { Camera } from '@ionic-native/camera';
import { NetworkPage } from './../pages/network/network';
import { QrScanerPage } from './../pages/qr-scaner/qr-scaner';
import { GeolocationMapsPage } from './../pages/geolocation-maps/geolocation-maps';
import { CameraPage } from './../pages/camera/camera';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserSampleProvider } from '../providers/user-sample/user-sample';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage, 
    CameraPage,
    GeolocationMapsPage,
    QrScanerPage,
    NetworkPage,
    FirebaseListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCuYcWnF3Bghs69w8nXC0SvtF63-yN7KaU",
      authDomain: "samplesv3.firebaseapp.com",
      databaseURL: "https://samplesv3.firebaseio.com",
      projectId: "samplesv3",
      storageBucket: "samplesv3.appspot.com",
      messagingSenderId: "596521294094"
    }),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CameraPage,
    GeolocationMapsPage,
    QrScanerPage,
    NetworkPage,
    FirebaseListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Geolocation,
    QRScanner,
    Network,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserSampleProvider
  ]
})
export class AppModule {}
