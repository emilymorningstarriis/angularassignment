import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {
recipes: Recipe[];
  constructor(private recipeService: RecipeService, private  router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
this.router.navigate(['new'],{relativeTo: this.route});
  }
}
