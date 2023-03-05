import { Component, OnInit,Output ,EventEmitter} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
recipes:Recipe[] = [
  new Recipe('A test recipe','This is test','https://www.themediterraneandish.com/wp-content/uploads/2020/02/falafel-recipe-1.jpg'),
  new Recipe('A test recipe','This is test','https://sweetbakedlife.files.wordpress.com/2014/09/cablecar.jpg')
];
  constructor() { }

  ngOnInit(): void {
  }
  onReipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
