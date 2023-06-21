import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  email:string='';
  password:string='';
  
  type = true;
 // isLoading!: boolean;

  constructor(
    //private authService: AuthService,
    //private router: Router,
    private auth: AuthService,
    //private alertController: AlertController
  ) { }

  ngOnInit():void {}   

  
  changeType() {
    this.type = !this.type;
  }

  onSubmit() {
    if(this.email==''){
      alert("you have to enter your email")
      return;

    }
    if(this.password==''){
      alert("you have to enter your password")
      return;

    }
    this.auth.login(this.email,this.password);
    this.email='';
    this.password='';
    
    
  }

 
}
