import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {Router} from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getDatabase, ref, get } from "firebase/database";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  //id:any;
  email:any;
  password:any;

  constructor(public nc:NavController,private router:Router, private auth:AngularFireAuth) { }

  ngOnInit() {
  }

  login(){


    this.email=((document.getElementById("email") as HTMLInputElement).value);
    this.password=((document.getElementById("password") as HTMLInputElement).value);

    this.auth.
    signInWithEmailAndPassword(this.email, this.password)
      .then((userCredential) => {
        if (userCredential.user){
          alert("Authentification réussi avec succès!!!!!!")
          this.router.navigateByUrl('/tabs');
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        window.alert(errorMessage);
      });

  }

}
