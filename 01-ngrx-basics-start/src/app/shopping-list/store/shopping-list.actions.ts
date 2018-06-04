import { Action } from '@ngrx/store';
import { Ingredient } from '../../shared/ingredient.model';

export const ADD_INGRIDIENT = 'ADD_INRIDIENT';
export const ADD_INGRIDIENTS = 'ADD_INRIDIENTS';
export const UPDATE_INGRDIENT = 'UPDATE_INGRDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const START_EDITING = 'START_EDITING';
export const STOP_EDITING = 'STOP_EDITING';

export class AddIngredient implements Action {
    readonly type = ADD_INGRIDIENT;
    constructor(public payload: Ingredient) { }
};

export class AddIngredients implements Action {
    readonly type = ADD_INGRIDIENTS;
    constructor(public payload: Ingredient[]) { }
};

export class UpdateIngredient implements Action {
    readonly type = UPDATE_INGRDIENT;
    constructor(public payload: Ingredient) { }
};

export class DeleteIngredient implements Action {
    readonly type = DELETE_INGREDIENT;
};

export class StartEditing implements Action {
    readonly type = START_EDITING;
    constructor(public payload: number) { }
};

export class StopEditing implements Action {
    readonly type = STOP_EDITING;
    constructor() { }
}

export type ShoppingListActions = AddIngredient
    | DeleteIngredient
    | UpdateIngredient
    | AddIngredients
    | StartEditing
    | StopEditing;