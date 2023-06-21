import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';


@Component({
  selector: 'app-listing',
  templateUrl: './listing.page.html',
  styleUrls: ['./listing.page.scss'],
})
export class ListingPage implements OnInit {
  categories: Category[] = [];
  api: any;


  constructor() { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(){
    this.categories = [
      { id: 1, name: 'North Indian', image: 'assets/dishes/nan.jpg',active:true },
      { id: 2, name: 'Italian', image: 'assets/dishes/pasta.jpg',active:true  },
      { id: 3, name: 'Chinese', image: 'assets/dishes/chowmein.jpg',active:true  },
      { id: 4, name: 'South Indian', image: 'assets/dishes/dosa.jpg' ,active:true },
      // { id: 5, name: 'Mexican', image: 'assets/dishes/dol.jpg',active:true  },
    ];
  }
}
