import { EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
export class RecipeService {
    selectedRecipe = new EventEmitter<Recipe>();
    private recepies: Recipe[] = [
        new Recipe('recipe 1', 'simple desc 1', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_2CAqyCXQmXjqazz1Ge3SUkv-cRock-wZgrhvEF0Is9xRJejR'),
        new Recipe('recipe 2', 'simple desc 2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_2CAqyCXQmXjqazz1Ge3SUkv-cRock-wZgrhvEF0Is9xRJejR')
    ];

    getRecepies() {
        return this.recepies;
    }
}