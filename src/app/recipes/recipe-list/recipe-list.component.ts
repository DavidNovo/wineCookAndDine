import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test', 'testing', 'https://www.foodiesfeed.com/free-food-photo/crispy-chicken-on-a-fork-detail/')
    , new Recipe('Second', 'second test recipe', 'sample url')
    , new Recipe('third recipe', 'pie', 'looks good')
  ];

  constructor() { }

  ngOnInit() {
  }

}
