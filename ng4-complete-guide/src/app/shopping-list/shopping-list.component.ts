import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit, ViewChild, ContentChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('apple', 5),
    new Ingredient('tomato', 10)
  ];

  constructor() { }

  ngOnInit() {
  }

  addIngredient(ingr: Ingredient) {
    this.ingredients.push(ingr);
  }

}
