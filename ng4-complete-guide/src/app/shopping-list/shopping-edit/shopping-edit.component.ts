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

  onAddIngredient(name: string, amount: number) {
    if (name && amount) {
      this.addIngredient.emit(new Ingredient(name, amount));
      this.nameInput.nativeElement.value = '';
      this.amountInput.nativeElement.value = '';
    }
  }

}
