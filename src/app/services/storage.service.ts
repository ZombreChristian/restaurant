import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';

export const INTRO_KEY = 'intro-slides';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  async setStorage(key: string, value: string) {
    return    localStorage['set']({
      key,
      value
    });
  }

  getStorage(key: string) {
    return    localStorage['get']({key});
  }

  removeStorage(key: string) {
    return    localStorage['remove']({key});
  }
  
}
