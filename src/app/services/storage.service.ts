import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular'

const storageKey = 'mylist';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) {
    this.init();
   }

  init(){
    this.storage.create();
  }

  /*getData(){
    return this.storage.get(storageKey) || [];
  }*/

  getData(user: string){
    return this.storage.get(user);
  }

  async setData(user:string, datos:any){
    await this.storage.set(user, datos);
  }

}
