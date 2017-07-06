import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
export class ShoppingListService {
    ingredientAdded = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('apple', 5),
        new Ingredient('tomato', 10)
    ];

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientAdded.emit(this.ingredients);
    }

    getIngredients() {
        return this.ingredients.slice();
    }    
}