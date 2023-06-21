import { Injectable } from '@angular/core';
import { Food } from '../models/food.module';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  getFoods(): Food[] {
    return [
      {
        id: 1,
        title: "Burger Americain",
        price: 12.5,
        image: "assets/dishes/1.jpg",
        description: "Great mexican roll includes mayoneese, capsicum, leaf and a lot of vegetables"

      },
      {
        id: 2,
        title: "Giga Burger",
        price: 11,
        image: "assets/dishes/2.jpg",
        description: "Great mexican roll includes mayoneese, capsicum, leaf and a lot of vegetables"
      },
      {
        id: 3,
        title: "Burger Sesame",
        price: 17,
        image: "assets/dishes/3.jpg",
        description: "Great mexican roll includes mayoneese, capsicum, leaf and a lot of vegetables"
      },
      {
        id: 4,
        title: "Poisson Braisé",
        price: 13,
        image: "assets/dishes/fish.jpg",
        description: "Great mexican roll includes mayoneese, capsicum, leaf and a lot of vegetables"

      },
      {
        id: 5,
        title: "Pizza Campionne",
        price: 18,
        image: "assets/dishes/5.jpeg",
        description: "Great mexican roll includes mayoneese, capsicum, leaf and a lot of vegetables"
      },
      {
        id: 6,
        title: "Rasta Burger",
        price: 16.2,
        image: "assets/dishes/6.jpeg",
        description: "Great mexican roll includes mayoneese, capsicum, leaf and a lot of vegetables"
      },
      {
        id: 7,
        title: "Shawarma Poulet",
        price: 14,
        image: "assets/dishes/7.jpeg",
        description: "Great mexican roll includes mayoneese, capsicum, leaf and a lot of vegetables"

      },
      {
        id: 8,
        title: "Chicken Burger",
        price: 20,
        image: "assets/dishes/8.jpeg",
        description: "Great mexican roll includes mayoneese, capsicum, leaf and a lot of vegetables"
      },
      {
        id: 9,
        title: "Pain Anglais",
        price: 10,
        image: "assets/dishes/9.jpg",
        description: "Great mexican roll includes mayoneese, capsicum, leaf and a lot of vegetables"
      },
      {
        id: 10,
        title: "Shawarma Taouk",
        price: 9,
        image: "assets/dishes/10.jpeg",
        description: "Great mexican roll includes mayoneese, capsicum, leaf and a lot of vegetables"

      },
      {
        id: 11,
        title: "Frites",
        price: 20,
        image: "assets/dishes/11.jpeg",
        description: "Great mexican roll includes mayoneese, capsicum, leaf and a lot of vegetables"
      },
      {
        id: 12,
        title: "Pain de mie",
        price: 22.3,
        image: "assets/dishes/12.jpeg",
        description: "Great mexican roll includes mayoneese, capsicum, leaf and a lot of vegetables"
      },
      {
        id: 13,
        title: "Sea food",
        price: 15.7,
        image: "assets/dishes/13.jpeg",
        description: "Great mexican roll includes mayoneese, capsicum, leaf and a lot of vegetables"

      },
      {
        id: 14,
        title: "Sea food",
        price: 7,
        image: "assets/dishes/14.jpg",
        description: "Great mexican roll includes mayoneese, capsicum, leaf and a lot of vegetables"
      },
      {
        id: 15,
        title: "Sea food",
        price: 23,
        image: "assets/dishes/15.jpg",
        description: "Great mexican roll includes mayoneese, capsicum, leaf and a lot of vegetables"
      },
      {
        id: 16,
        title: "Sea food",
        price: 19,
        image: "assets/dishes/16.jpeg",
        description: "Great mexican roll includes mayoneese, capsicum, leaf and a lot of vegetables"

      },
      {
        id: 17,
        title: "Sea food",
        price: 13.8,
        image: "assets/dishes/17.jpeg",
        description: "Great mexican roll includes mayoneese, capsicum, leaf and a lot of vegetables"
      },
      {
        id: 18,
        title: "Sea food",
        price: 126,
        image: "assets/dishes/18.jpeg",
        description: "Great mexican roll includes mayoneese, capsicum, leaf and a lot of vegetables"
      },
      {
        id: 19,
        title: "Sea food",
        price: 16.76,
        image: "assets/dishes/19.jpg",
        description: "Great mexican roll includes mayoneese, capsicum, leaf and a lot of vegetables"

      },
      {
        id: 20,
        title: "Nouilles",
        price: 14,
        image: "assets/dishes/20.jpg",
        description: "Great mexican roll includes mayoneese, capsicum, leaf and a lot of vegetables"
      },



    ]
  }

  getFood(id: number): Food {
    //return this.getFoods().find((food) => food.id ==id);
    return this.getFoods().find((food) => food?.id == id)!;


  }
}
