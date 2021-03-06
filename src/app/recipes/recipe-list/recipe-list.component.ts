import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      ' A Test Recipe',
      'This Is simply a Test',
      'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/WQPOMEEPPQI6ZDO5KIJWTCGSMM.jpg'
    ),
    new Recipe(
      ' A Test Recipe',
      'This Is simply a Test',
      'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/WQPOMEEPPQI6ZDO5KIJWTCGSMM.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
