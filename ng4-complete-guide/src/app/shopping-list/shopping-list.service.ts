import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('apple', 5),
        new Ingredient('tomato', 10)
    ];

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients);
    }

    getIngredients() {
        return this.ingredients.slice();
    }    

    addIngredients(ingredients: Ingredient[]) {
        // for(const ingredient of ingredients) {
        //     this.addIngredient(ingredient); //each time will call event emitter, better to add al ingredietns and than cal emit one time
        // }
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients);
    }
}