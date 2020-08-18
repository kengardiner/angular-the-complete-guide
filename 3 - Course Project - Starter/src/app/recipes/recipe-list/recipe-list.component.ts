import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    @Output() recipeWasSelected = new EventEmitter<Recipe>()
    recipes: Recipe[] = [
        new Recipe('A test recipe', 'This is a test', 'https://p0.pikist.com/photos/801/880/cookbook-recipes-food-cook-book-paper-hand-culinary-ingredients.jpg'),
        new Recipe('A second test recipe', 'This is a second test', 'https://p0.pikist.com/photos/801/880/cookbook-recipes-food-cook-book-paper-hand-culinary-ingredients.jpg'),
    ];

    constructor() {
    }

    ngOnInit(): void {
    }

    onRecipeSelected (recipe: Recipe) {
        this.recipeWasSelected.emit(recipe);
    }

}
