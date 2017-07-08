import { Subject } from 'rxjs/Subject';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    constructor(private shoppingListService: ShoppingListService) { }

    private recipes: Recipe[] = [
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

    setRecepies(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.getRecipes());
    }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    getRecipe(id: number) {
        return this.recipes[id];
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.getRecipes())
    }

    updateRecipe(index: number, recipe: Recipe) {
        this.recipes[index] = recipe;
        this.recipesChanged.next(this.getRecipes());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.getRecipes());
    }
}