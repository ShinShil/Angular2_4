import { Ingredient } from './../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';
export class ShoppingListService {
    ingredientsChanged = new Subject();
    startedEdit = new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient('apple', 5),
        new Ingredient('tomato', 10)
    ];

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.getIngredients());
    }

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    getIngredients() {
        return this.ingredients.slice();
    }    

    addIngredients(ingredients: Ingredient[]) {
        // for(const ingredient of ingredients) {
        //     this.addIngredient(ingredient); //each time will call event emitter, better to add al ingredietns and than cal emit one time
        // }
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients);
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.getIngredients());
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.getIngredients());
    }
}