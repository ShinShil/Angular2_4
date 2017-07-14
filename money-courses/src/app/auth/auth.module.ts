import { AuthFormComponent } from './auth-form/auth-form.component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [FormsModule, CommonModule],
    exports: [],
    declarations: [AuthFormComponent],
    providers: [],
})
export class AuthModule { }
