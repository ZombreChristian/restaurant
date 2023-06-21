import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {

  
  type = false;
  email:string=''; 
  password:string='';
  constructor(
    //private authService: AuthService,
    //private router: Router,
    private auth: AuthService,
    //private alertController: AlertController
    ) { 
    
  }

  ngOnInit() {}

  
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
    this.auth.register(this.email,this.password);
    this.email='';
    this.password='';
    
  }

  

}
