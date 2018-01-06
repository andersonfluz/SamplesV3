import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { UserSampleProvider } from './../../providers/user-sample/user-sample';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the FirebaseCreatePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-firebase-create',
  templateUrl: 'firebase-create.html',
})
export class FirebaseCreatePage {
  title: string;
  form: FormGroup;
  user: any;
  
  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder, private provider: UserSampleProvider,
    private toast: ToastController) {
  
    // maneira 1
    this.user = this.navParams.data.contact || { };
    this.createForm();
  
    // // maneira 2
    // this.contact = { };
    // this.createForm();
  
    // if (this.navParams.data.key) {
    //   const subscribe = this.provider.get(this.navParams.data.key).subscribe((c: any) => {
    //     subscribe.unsubscribe();
  
    //     this.contact = c;
    //     this.createForm();
    //   })
    // }
  
    this.setupPageTitle();
  }
  
  private setupPageTitle() {
    this.title = this.navParams.data.user ? 'Alterando usuario' : 'Novo Usuario';
  }
  
  createForm() {
    this.form = this.formBuilder.group({
      key: [this.user.key],
      name: [this.user.name, Validators.required],
      tel: [this.user.tel, Validators.required],
    });
  }
  
  onSubmit() {
    if (this.form.valid) {
      this.provider.save(this.form.value)
        .then(() => {
          this.toast.create({ message: 'Usuario salvo com sucesso.', duration: 3000 }).present();
          this.navCtrl.pop();
        })
        .catch((e) => {
          this.toast.create({ message: 'Erro ao salvar o usuario.', duration: 3000 }).present();
          console.error(e);
        })
    }
  }
}
