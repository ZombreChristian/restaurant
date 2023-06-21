import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { doc, Firestore, setDoc } from '@angular/fire/firestore';
import { StorageService } from '../storage.service';

import {AngularFireAuth}  from '@angular/fire/compat/auth';

import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
//import {Router} from '@angular/router';
//import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getDatabase, ref, set } from "firebase/database";

//import {Router}  from '@angular/router';

//export const user_key = 'chris_user_id';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  resetPassword(email: any) {
    throw new Error('Method not implemented.');
  }
  email:any;
  password:any;

  constructor(public nc:NavController, private auth:AngularFireAuth,
    private fireauth: AngularFireAuth,private router:Router

  ) { }

register(email:string,password:string){
  this.email=((document.getElementById("email") as HTMLInputElement).value);
    this.password=((document.getElementById("password") as HTMLInputElement).value);
    this.auth.createUserWithEmailAndPassword(this.email, this.password) .then((userCredential) => {
      if (userCredential.user){

          window.alert("logged in ");
          this.router.navigateByUrl('/login');
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        window.alert(errorMessage)
        // ..
      });




}
///sign-up
login(email:string,password:string){

  this.email=((document.getElementById("email") as HTMLInputElement).value);
    this.password=((document.getElementById("password") as HTMLInputElement).value);

    this.auth.
    signInWithEmailAndPassword(this.email, this.password)
      .then((userCredential) => {
        if (userCredential.user){
          alert("success")
          this.router.navigateByUrl('/tabs');
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        window.alert(errorMessage);
      });

}

// logout
logout(){
  this.fireauth.signOut().then(()=>{
    localStorage.removeItem('token');
    this.router.navigate(['/sign-in'])

  })
}




}




  // async register(formValue: { email: string; password: string; }) {
  //   try {
  //     const registeredUser = await createUserWithEmailAndPassword(this._fireAuth, formValue.email, formValue.password);
  //     console.log('registered user: ', registeredUser);
  //     const uid = registeredUser.user.uid;
  //     const dataRef = doc(this._firestore, `users/${uid}`);
  //     setDoc(dataRef, formValue);
  //     await this.storage.setStorage(user_key, uid);
  //     return uid;
  //   } catch(e) {
  //     throw(e);
  //   }
  // }

  // async login(formValue: { email: string; password: string; }) {
  //   try {
  //     const response = await signInWithEmailAndPassword(this._fireAuth, formValue.email, formValue.password);
  //     console.log('login user: ', response);
  //     if(response?.user) {
  //       const uid = response.user.uid;
  //       await this.storage.setStorage(user_key, uid);
  //       return uid;
  //     } else {
  //       return false;
  //     }
  //   } catch(e) {
  //     throw(e);
  //   }
  // }

  // checkAuth() {
  //   return new Promise((resolve, reject) => {
  //     onAuthStateChanged(this._fireAuth, user => {
  //       console.log(user);
  //       if(user) resolve(true);
  //       resolve(false);
  //     });
  //   });
  // }

  // async logout() {
  //   try {
  //     await signOut(this._fireAuth);
  //     await this.storage.removeStorage(user_key);
  //     return true;
  //   } catch(e) {
  //     throw(e);
  //   }
  // }

