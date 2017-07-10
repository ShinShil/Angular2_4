import { AuthService } from './../../auth/auth.service';
import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  index: number;
  constructor(private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.recipe = this.recipeService.getRecipe(params['id']);
      this.index = params['id'];
    })
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    // both are working
    // this.router.navigate(['edit'], {relativeTo: this.route});
    this.router.navigate(['..', this.index, 'edit'], { relativeTo: this.route });
  }

  onDeleteRecipe() {
    if (!this.authService.isAuthenticated()) {
      alert('access denied');
    } else {
      this.recipeService.deleteRecipe(this.index);
      this.router.navigate(['/recipes']);
    }
  }

}
