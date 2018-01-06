import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the UserSampleProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class UserSampleProvider {
  private PATH = 'users/';

  constructor(public db: AngularFireDatabase) {
    console.log('Hello UserSampleProvider Provider');
  }

  getAll() {
    return this.db.list(this.PATH, ref => ref.orderByChild('name'))
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })
  }

  get(key: string) {
    return this.db.object(this.PATH + key).snapshotChanges()
      .map(c => {
        return { key: c.key, ...c.payload.val() };
      });
  }
 
  save(user: any) {
    return new Promise((resolve, reject) => {
      if (user.key) {
        this.db.list(this.PATH)
          .update(user.key, { name: user.name, tel: user.tel })
          .then(() => resolve())
          .catch((e) => reject(e));
      } else {
        this.db.list(this.PATH)
          .push({ name: user.name, tel: user.tel })
          .then(() => resolve());
      }
    })
  }
 
  remove(key: string) {
    return this.db.list(this.PATH).remove(key);
  }

}
