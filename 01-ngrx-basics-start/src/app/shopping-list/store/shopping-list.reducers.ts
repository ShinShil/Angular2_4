import { Action } from '@ngrx/store';
import { Ingredient } from '../../shared/ingredient.model';

import * as ShoppingListActions from './shopping-list.actions';

export interface AppState {
    shoppingList: State;
}

export interface State {
    ingredients: Ingredient[];
    editingIngredient: Ingredient;
    editingIndex: number;
}

const initialState: State = {
    ingredients: [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ],
    editingIndex: -1,
    editingIngredient: null
}
export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {
    switch (action.type) {
        case ShoppingListActions.ADD_INGRIDIENT:
            // return new object because it should be immutable
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload]
            }
        case ShoppingListActions.ADD_INGRIDIENTS:
            return {
                ...state,
                ingredients: [...state.ingredients, ...action.payload]
            }
        case ShoppingListActions.DELETE_INGREDIENT:
            const ingredients = [...state.ingredients];
            ingredients.splice(state.editingIndex, 1);
            return {
                ...state,
                ingredients
            }
        case ShoppingListActions.UPDATE_INGRDIENT:
            const updatedIngredients = [...state.ingredients];
            updatedIngredients[state.editingIndex] = action.payload;
            return {
                ...state,
                ingredients: updatedIngredients
            }
        case ShoppingListActions.ADD_INGRIDIENTS:
            return {
                ...state,
                ingredients: [...state.ingredients, ...action.payload]
            }
        case ShoppingListActions.START_EDITING:
            return {
                ...state,
                editingIndex: action.payload,
                editingIngredient: state.ingredients[action.payload]
            }
        case ShoppingListActions.STOP_EDITING:
            return {
                ...state,
                editingIndex: -1,
                editingIngredient: null
            }
    }
    return state;
}