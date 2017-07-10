import { FormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { ShoppingListComponent } from './shopping-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        FormsModule
    ],
    exports: [RouterModule]
})
export class ShoppingListRoutingModule {
}
