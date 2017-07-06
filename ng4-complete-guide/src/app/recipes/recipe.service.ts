import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class RecipeService {
    selectedRecipe = new EventEmitter<Recipe>();

    constructor(private shoppingListService: ShoppingListService) {}

    private recepies: Recipe[] = [
        new Recipe(
            'Fish with potatoe',
            'What else you need to say',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_2CAqyCXQmXjqazz1Ge3SUkv-cRock-wZgrhvEF0Is9xRJejR',
            [
                new Ingredient('Fish', 2),
                new Ingredient('Potatoe', 20)
            ]),
        new Recipe(
            'Student dinner',
            'Amazing dish is waiting for you',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_2CAqyCXQmXjqazz1Ge3SUkv-cRock-wZgrhvEF0Is9xRJejR',
            [
                new Ingredient('bread', 1),
                new Ingredient('milk', 2)
            ])
    ];

    getRecepies() {
        return this.recepies;
    }

    addIngredientToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}