import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { NgModule } from '@angular/core';

import { ShoppingListRoutingModule } from './shopping-list-routing.module';

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingEditComponent
    ],
    imports: [ShoppingListRoutingModule, FormsModule, CommonModule],
})
export class ShoppingListModule { }
