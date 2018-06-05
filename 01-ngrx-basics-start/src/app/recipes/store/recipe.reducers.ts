import { Action } from "@ngrx/store";
import { Recipe } from "../recipe.model";
import { Ingredient } from "../../shared/ingredient.model";
import * as RecipeActions from "./recipe.actions";
import { AppState } from "../../store/app.reducers";

export interface FeatureState extends AppState {
    recipes: State;
}

export interface State {
    recipes: Recipe[];
}

const initialState = {
    recipes: [
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
    ]
}

export function recipeReducer(state: State = initialState, action: RecipeActions.RecipeActions) {
    switch(action.type) {
        case RecipeActions.SET_RECIPES:
            return {
                ...state,
                recipes: [...action.payload]
            }
        case RecipeActions.ADD_RECIPE:
            return {
                ...state,
                recipes: [...state.recipes, action.payload]
            }
        case RecipeActions.UPDATE_RECIPE:
            const recipe = state.recipes[action.payload.index];
            const updatedRecipe = {
                ...recipe,
                ...action.payload.recipe
            };
            const recipes = [...state.recipes];
            recipes[action.payload.index] = updatedRecipe;
            return {
                ...state,
                recipes
            }
        case RecipeActions.DELETE_RECIPE:
            const oldRecipes = [...state.recipes];
            oldRecipes.splice(action.payload,  1);
            return {
                ...state,
                recipes: oldRecipes
            }
        default:
            return state;
    }
}
