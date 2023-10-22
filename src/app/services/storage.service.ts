import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular'
import { Preferences } from '@capacitor/preferences';

const KEY_USER = 'user';

const usuario = {
    nombre: '...',
    apellido: '...',
    rut: '...',
    correo: '...',
    region: '...',
    comuna: '...',
    password: '...'
  }

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) {
    this.init();
    /*this.user = {
      nombre: '',
      apellido: '',
      rut: '',
      correo: '',
      region: '',
      comuna: '',
      password: ''
    };*/
   }

  init(){
    this.storage.create();
  }

  async create(key:string, value:any){
    await Preferences.set({key,value});
  }

  async read(key:string){
      return (await Preferences.get({key}));
  }

  async showName(key:string){
    await Preferences.get({key}).then((data:any)=>{
      let num = JSON.parse(data.value);
      let nom = JSON.stringify(num.nombre)
      return nom;
    })

  }

  async upgrade(key:string, value:any){
    await Preferences.set({key,value});
  }

  async getData(){
    var usuario = await Preferences.get({ key: 'usuario' });
  }

  async setData(){
    await Preferences.set({key: 'usuario', value: JSON.stringify(usuario)})
  }

}
