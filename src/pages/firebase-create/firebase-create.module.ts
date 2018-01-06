import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FirebaseCreatePage } from './firebase-create';

@NgModule({
  declarations: [
    FirebaseCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(FirebaseCreatePage),
  ],
})
export class FirebaseCreatePageModule {}
