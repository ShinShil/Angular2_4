import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthFormComponent } from './auth/auth-form/auth-form.component';
import { DetailsComponent } from './core/details/details.component';

const appRoutes: Routes = [
    { path: '', component: DetailsComponent, pathMatch: 'full' },
    { path: 'login', component: AuthFormComponent, pathMatch: 'full' },
    { path: '**', redirectTo: '' }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }