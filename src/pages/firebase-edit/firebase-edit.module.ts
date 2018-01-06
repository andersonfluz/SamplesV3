import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FirebaseEditPage } from './firebase-edit';

@NgModule({
  declarations: [
    FirebaseEditPage,
  ],
  imports: [
    IonicPageModule.forChild(FirebaseEditPage),
  ],
})
export class FirebaseEditPageModule {}
