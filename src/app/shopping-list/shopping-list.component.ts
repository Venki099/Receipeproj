import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients:Ingredients[] = [
  new Ingredients('Apples',100),
  new Ingredients('Tomato',200)
];
  constructor() { }

  ngOnInit(): void {
  }
  onIngridentsAdded(ingrident:Ingredients){
    this.ingredients.push(ingrident);
  }
}
