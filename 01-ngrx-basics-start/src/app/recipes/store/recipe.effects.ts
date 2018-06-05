import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { Recipe } from '../recipe.model';
import { FETCH_RECIPES, SetRecipes, STORE_RECIPES } from './recipe.actions';
import { FeatureState } from './recipe.reducers';

@Injectable()
export class RecipeEffects {

    @Effect()
    recipeFetch = this.actions$
        .ofType(FETCH_RECIPES)
        .switchMap(action => {
            return this.httpClient.get<Recipe[]>('https://ng-recipe-book-73a68.firebaseio.com/data.json', {
                observe: 'body',
                responseType: 'json'
            })
                .map(
                    (recipes) => {
                        console.log(recipes);
                        for (let recipe of recipes) {
                            if (!recipe['ingredients']) {
                                recipe['ingredients'] = [];
                            }
                        }
                        return new SetRecipes(recipes);
                    }
                )
        });

    @Effect({ dispatch: false })
    recipeStore = this.actions$
        .ofType(STORE_RECIPES)
        .withLatestFrom(this.store.select('recipes'))
        .switchMap(([action, state]) => {
            const req = new HttpRequest('PUT', 'https://ng-recipe-book-73a68.firebaseio.com/data.json',
                state.recipes, { reportProgress: true });
            return this.httpClient.request(req);
        })

    constructor(private actions$: Actions,
        private httpClient: HttpClient,
        private store: Store<FeatureState>) { }
}