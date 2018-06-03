import { Injectable } from '@angular/core';
import 'rxjs/Rx';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService) {
  }

  storeRecipes() {
    const token = this.authService.getToken();
    // const req = new HttpRequest('PUT', 'https://ng-recipe-book-73a68.firebaseio.com/data.json',
    //   this.recipeService.getRecipes(),
    //   {
    //     reportProgress: true,
    //     params: new HttpParams().set('auth', token),
    //   });
    // return this.http.request(req);
    
    return this.http.put('https://ng-recipe-book-73a68.firebaseio.com/data.json',
      this.recipeService.getRecipes(),
      {
        observe: 'events',
        params: new HttpParams().set('auth', token),
        reportProgress: true
      });
  }

  getRecipes() {
    const token = this.authService.getToken();

    this.http.get<Recipe[]>('https://ng-recipe-book-73a68.firebaseio.com/data.json?auth=' + token)
      .map(
        (recipes) => {
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
