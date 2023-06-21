import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { ApiService } from './../services/api/api.service';
import SwiperCore, { SwiperOptions, Autoplay, Pagination } from 'swiper';

SwiperCore.use([Autoplay, Pagination]);

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, AfterContentChecked {

  loc = 'Locating...';
  banners: any[] = [];
  categories: any[] = [];
  favorites: any[] = [];
  offers: any[] = [];
  nearby: any[] = [];
  bannerConfig!: SwiperOptions;
  categoryConfig!: SwiperOptions;
  restaurantConfig!: SwiperOptions;

  constructor(

    private api: ApiService
  ) { }

  ngOnInit() {

    this.categories = this.api.categories;
    this.favorites = this.api.allRestaurants;
    this.offers = [...this.api.allRestaurants];
    this.nearby = this.api.allRestaurants;


    this.banners = this.api.banners;



  }

  ngAfterContentChecked() {
    this.bannerConfig = {
      slidesPerView: 1.2,
      spaceBetween: 10,
      centeredSlides: true,
      initialSlide: this.banners?.length > 1 ? 1 : 0,
      autoplay: {
        delay: 3000
      },
      pagination: { clickable: true }
    };
    this.categoryConfig = {
      slidesPerView: 3.5
    };
    this.restaurantConfig = {
      slidesPerView: 1.1
    };
  }

}
