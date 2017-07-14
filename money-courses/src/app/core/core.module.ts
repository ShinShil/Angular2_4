import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthService } from '../auth/auth.service';
import { StudentStorageService } from '../students/service/student-storage.service';
import { StudentsService } from '../students/service/students.service';
import { DetailsComponent } from './details/details.component';
import { TextHiderPipe } from './details/text-hider.pipe';
import { HeaderComponent } from './header/header.component';
import { TextHiderDirective } from './details/text-hider.directive';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        HeaderComponent
    ],
    declarations: [
        DetailsComponent,
        HeaderComponent,
        TextHiderPipe,
        TextHiderDirective
    ],
    providers: [StudentsService, StudentStorageService, AuthService],
})
export class CoreModule { }
