import { Component, OnInit ,ViewChild,ElementRef,Output,EventEmitter} from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef:ElementRef;
  @ViewChild('amountInput') amountInputRef:ElementRef;
  @Output() ingridengtsAdded = new EventEmitter<Ingredients>();
  constructor() { }

  ngOnInit(): void {
  }

  onAddItem(){
    const newIngrident = this.nameInputRef.nativeElement.value;
    const  newAmount = this.amountInputRef.nativeElement.value;
    const newingredients = new Ingredients(newIngrident,newAmount);
    this.ingridengtsAdded.emit(newingredients);
  }
}
