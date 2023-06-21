import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  query!: string;
  searchBtn !:boolean;
  searchBar!: boolean;
  categories: any[] = [];
  allRestaurants: any[] = [];
  restaurants: any[] = [];

  constructor() { }

  ngOnInit() {
    this.categories = [
      {id: 1, cover: 'assets/dishes/2.jpg', name: 'Indian'},
      {id: 2, cover: 'assets/dishes/3.jpg', name: 'Italian'},
      {id: 8, cover: 'assets/dishes/10.jpeg', name: 'Rolls'},
      {id: 7, cover: 'assets/dishes/9.jpeg', name: 'Burgers'},
      {id: 3, cover: 'assets/dishes/5.jpeg', name: 'Mexican'},
      {id: 4, cover: 'assets/dishes/6.jpeg', name: 'American'},
      {id: 5, cover: 'assets/dishes/7.jpeg', name: 'Chinese'},
      {id: 6, cover: 'assets/dishes/8.jpeg', name: 'Sea Food'},
    ];

    this.allRestaurants = [
      {
        id: '1',
        cover: 'assets/dishes/3.jpg',
        name: 'Kolkata Roll',
        cuisines: [
          'Italian',
          'Mexican'
        ],
        rating: 5,
        delivery_time: 25,
        distance: 2.5,
        price: 100
      },
      {
        id: '2',
        cover: 'assets/dishes/2.jpg',
        name: 'Stayfit1',
        cuisines: [
          'Italian',
          'Mexican',
          'Chinese'
        ],
        rating: 5,
        delivery_time: 25,
        distance: 2.5,
        price: 100
      },
      {
        id: '3',
        cover: 'assets/dishes/restaurant.jpg',
        name: 'Stayfit',
        cuisines: [
          'Indian',
          'Italian',
          'Mexican'
        ],
        rating: 5,
        delivery_time: 25,
        distance: 2.5,
        price: 100,
        latitude: 0,
        longitude: 0
      },
    ];
  }

  updateSearch(query?:any) {
    if(query) this.query = query;
    this.searchBar = true;
    // get restaurant data
    this.restaurants = this.allRestaurants.filter(x => {
      const data = x.cuisines.find((z:string) => z == this.query);
      console.log('data: ', data);
      if(data) return true;
      return false;
    });
    console.log('update restaurant data: ', this.restaurants);
    
  }

  onInputQuery() {
    console.log('input query: ', this.query);
    if(this.query.length > 0) {
      this.searchBtn = true;
    } else {
      this.searchBtn = false;
    }
    
  }

  toggleSearch(val?:any) {
    if(val) {
      this.query = '';
      this.onInputQuery();
    }
    this.searchBar = !this.searchBar;
  }


}