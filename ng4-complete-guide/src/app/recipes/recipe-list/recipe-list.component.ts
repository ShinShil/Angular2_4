import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('recipe 1', 'simple desc 1', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_2CAqyCXQmXjqazz1Ge3SUkv-cRock-wZgrhvEF0Is9xRJejR'),
    new Recipe('recipe 2', 'simple desc 2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_2CAqyCXQmXjqazz1Ge3SUkv-cRock-wZgrhvEF0Is9xRJejR')
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  onRecepieSelected(recipeEl: Recipe) {
    this.recipeWasSelected.emit(recipeEl);
  }

  constructor() { }

  ngOnInit() {

  }

}
