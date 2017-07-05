import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

import { Ingredient } from './../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() addIngredient = new EventEmitter<Ingredient>();

  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  constructor() { }


  ngOnInit() {
  }

  onAddIngredient() {
      const name = this.nameInput.nativeElement.value;
      const amount = this.amountInput.nativeElement.value;
      const newIngredient = new Ingredient(name, amount);
      this.addIngredient.emit(newIngredient);
  }

}
