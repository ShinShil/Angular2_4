import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthGuardService } from '../auth/auth-guard.service';
import { CanDeactivateGuard } from '../core/service/can-deactivate-guard.service';
import { RecordComponent } from './record/record.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentAdvancedComponent } from './student-form/student-advanced/student-advanced.component';
import { PhoneInputDirective } from './student-form/student-basic/phone-input.directive';
import { StudentBasicComponent } from './student-form/student-basic/student-basic.component';
import { StudentEditTabsComponent } from './student-form/student-edit-tabs/student-edit-tabs.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentsRoutingModule } from './students-routing.module';
import { MailHiderPipe } from './students-table/mail-hider.pipe';
import { PhoneHiderPipe } from './students-table/phone-hider.pipe';
import { StudentsTableComponent } from './students-table/students-table.component';
import { StudentsComponent } from './students.component';

@NgModule({
    imports: [
        StudentsRoutingModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [],
    declarations: [
        StudentsComponent,
        PhoneHiderPipe,
        MailHiderPipe,
        StudentsTableComponent,
        StudentFormComponent,
        StudentDetailsComponent,
        StudentBasicComponent,
        StudentAdvancedComponent,
        PhoneInputDirective,
        StudentEditTabsComponent,
        RecordComponent
    ],
    providers: [AuthGuardService, CanDeactivateGuard],
})
export class StudentsModule { }
