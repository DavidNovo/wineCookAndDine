import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test', 'testing', 'https://www.foodiesfeed.com/free-food-photo/crispy-chicken-on-a-fork-detail/')
    , new Recipe('Second', 'second test recipeElement', 'sample url')
    , new Recipe('third recipeElement', 'pie', 'looks good')
  ];

  // output the recipes to the recipeElement-item component
  @Output() recipeList = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

}
