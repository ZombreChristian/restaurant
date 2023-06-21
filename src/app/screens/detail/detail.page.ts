import { CartService } from './../../services/cart.service';
import { CartItem } from './../../models/cart-item.model';
import { ActivatedRoute } from '@angular/router';
import { Food } from 'src/app/models/food.module';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { FoodService } from 'src/app/services/food.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
id:number;
food?:Food;
//cartitem?:string;

  constructor(
    private activatedRoute:ActivatedRoute,
    private foodService:FoodService,
    private cartService :CartService,
    private toastCtrl : ToastController
    ) {

    this.id = +this.activatedRoute.snapshot.paramMap.get('id')!;
   }

  ngOnInit() {
    this.food = this.foodService.getFood(this.id);
  }
  addItemToCart(){
    const cartitem :CartItem = {
    id : this.food?.id ?? 0, // use 0 as default value if id is undefined
    name : this.food?.title ?? '', // use empty string as default value if name is undefined
    price : this.food?.price ?? 0, // use 0 as default value if price is undefined
    image : this.food?.image ?? '', // use empty string as default value if image is undefined
    quantity:1
    };

    this.cartService.addToCart(cartitem);
    this.presentToast();

  }

  async presentToast(){
    const toast = await this.toastCtrl.create({
      message:'Food added to the cart',
      mode:'ios',
      duration:1000,
      position:'top',
    });
    toast.present();
  }

}
