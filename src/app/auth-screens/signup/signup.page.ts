import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {Router} from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getDatabase, ref, set } from "firebase/database";



// import { Observable } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  email:any;
  password:any;
  constructor(public nc:NavController,private router:Router, private auth:AngularFireAuth,) { }

  ngOnInit() {
  }

  async signup(){

    //this.INE=((document.getElementById("INE") as HTMLInputElement).value);
    //this.username=((document.getElementById("username") as HTMLInputElement).value);
    this.email=((document.getElementById("email") as HTMLInputElement).value);
    this.password=((document.getElementById("password") as HTMLInputElement).value);
    this.auth.createUserWithEmailAndPassword(this.email, this.password) .then((userCredential) => {
      if (userCredential.user){
          window.alert("Votre comte a été créé avec succès!!! Veillez vous connectez... ");
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
}
