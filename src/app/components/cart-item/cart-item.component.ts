import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item.model';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent  {
  @Input() item?: CartItem;
  @Output() increase = new EventEmitter();
  @Output() decrease = new EventEmitter();



  }


