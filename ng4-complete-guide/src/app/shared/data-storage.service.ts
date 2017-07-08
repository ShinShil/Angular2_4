import { Recipe } from './../recipes/recipe.model';
import { RecipeService } from './../recipes/recipe.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class DataStorageService {

  constructor(private http: Http, private recipeService: RecipeService) { }

  storeRecipes() {
    return this.http.put('https://ng-recipe-book-73a68.firebaseio.com/data.json', this.recipeService.getRecipes());
  }

  getRecepies() {
    return this.http.get('https://ng-recipe-book-73a68.firebaseio.com/data.json').subscribe((response: Response) => {
      const recipes: Recipe[] = response.json();
      for (const recipe of recipes) {
        if (!recipe['ingredients']) {
          recipe['ingredients'] = [];
        }
      }
      this.recipeService.setRecepies(recipes);
    });
  }
}
