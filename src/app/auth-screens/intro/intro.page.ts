import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { INTRO_KEY, StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slideOpts: any;

  constructor(
    private router: Router,
    private storage: StorageService) { }

  ngOnInit() {
    
  }

  async goToLogin() {
    await this.storage.setStorage(INTRO_KEY, 'true');
    this.router.navigateByUrl('/auth-screen', { replaceUrl: true });
  }

  

}
