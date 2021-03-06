import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model'
import {ShoppinglistService} from './shoppinglist.service';
@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {
  ingredients: Ingredient[];
  constructor(private slService: ShoppinglistService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {this.ingredients = ingredients;});
  }


}
