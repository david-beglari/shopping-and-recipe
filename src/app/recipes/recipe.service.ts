import {EventEmitter} from '@angular/core';
import {Recipe} from './recipe.model';


export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A test recipe', 'Description', 'https://assets.epicurious.com/photos/5d49f1ea888da200097dce24/6:4/w_620%2Ch_413/TomatoesHerbs_RECIPE_073119_278.jpg'),
    new Recipe('A recipe', 'Description', 'https://assets.epicurious.com/photos/5d49f1ea888da200097dce24/6:4/w_620%2Ch_413/TomatoesHerbs_RECIPE_073119_278.jpg'),
    new Recipe('A test', 'Description', 'https://assets.epicurious.com/photos/5d49f1ea888da200097dce24/6:4/w_620%2Ch_413/TomatoesHerbs_RECIPE_073119_278.jpg'),
    new Recipe('test recipe', 'Description', 'https://assets.epicurious.com/photos/5d49f1ea888da200097dce24/6:4/w_620%2Ch_413/TomatoesHerbs_RECIPE_073119_278.jpg'),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }
}
