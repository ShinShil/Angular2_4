import { Recipe } from './recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipeDetail: Recipe;

  onRecipeSelected(recipe: Recipe) {
    this.recipeDetail = recipe;
  }

  constructor() { }

  ngOnInit() {
  }

}
