import { AuthService } from './../auth/auth.service';
import { Recipe } from './../recipes/recipe.model';
import { RecipeService } from './../recipes/recipe.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class DataStorageService {

  constructor(private http: Http,
    private recipeService: RecipeService,
    private authService: AuthService) { }

  storeRecipes() {
    const token = this.authService.getToken();
    return this.http.put('https://ng-recipe-book-73a68.firebaseio.com/data.json?auth=' + token, this.recipeService.getRecipes());
  }

  getRecepies() {
    const token = this.authService.getToken();

    return this.http.get('https://ng-recipe-book-73a68.firebaseio.com/data.json?auth=' + token).subscribe((response: Response) => {
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
