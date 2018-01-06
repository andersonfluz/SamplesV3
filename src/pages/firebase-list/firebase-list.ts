import { UserSampleProvider } from './../../providers/user-sample/user-sample';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';

/**
 * Generated class for the FirebaseListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-firebase-list',
  templateUrl: 'firebase-list.html',
})
export class FirebaseListPage {

  users: Observable<any>

  constructor(public navCtrl: NavController, private provider: UserSampleProvider, public navParams: NavParams, private toast: ToastController) {
    this.users = this.provider.getAll();
  }

  newUser() {
    this.navCtrl.push('FirebaseCreatePage');
  }
 
  editUser(user: any) {
    // Maneira 1
    this.navCtrl.push('FirebaseEditPage', { user: user });
 
    // Maneira 2
    // this.navCtrl.push('ContactEditPage', { key: contact.key });
  }
 
  removeUser(key: string) {
    if (key) {
      this.provider.remove(key)
        .then(() => {
          this.toast.create({ message: 'Contato removido sucesso.', duration: 3000 }).present();
        })
        .catch(() => {
          this.toast.create({ message: 'Erro ao remover o contato.', duration: 3000 }).present();
        });
    }
  }
}
