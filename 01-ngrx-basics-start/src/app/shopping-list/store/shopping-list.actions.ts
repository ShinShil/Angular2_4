import { Action } from '@ngrx/store';
import { Ingredient } from '../../shared/ingredient.model';

export const ADD_INGRIDIENT = 'ADD_INRIDIENT';

export class AddIngredient implements Action {
    readonly type = ADD_INGRIDIENT;
    constructor(public payload: Ingredient) { }
};

export type ShoppingListActions = AddIngredient;