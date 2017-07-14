import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecordComponent } from './record/record.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentAdvancedComponent } from './student-form/student-advanced/student-advanced.component';
import { StudentBasicComponent } from './student-form/student-basic/student-basic.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentsTableComponent } from './students-table/students-table.component';
import { StudentsComponent } from './students.component';

const routes: Routes = [
    { path: 'record', component: RecordComponent, data: {recordMode: true} },
    {
        path: 'students', component: StudentsComponent, children: [
            { path: '', component: StudentsTableComponent },
            { path: 'details/:index', component: StudentDetailsComponent },
            {
                path: 'edit/:index', component: StudentFormComponent, children: [
                    { path: '', redirectTo: 'basic', pathMatch: 'full' },
                    { path: 'basic', component: StudentBasicComponent },
                    { path: 'adv', component: StudentAdvancedComponent },
                ]
            },
            {
                path: 'create', component: StudentFormComponent, children: [
                    { path: '', redirectTo: 'basic', pathMatch: 'full' },
                    { path: 'basic', component: StudentBasicComponent },
                    { path: 'adv', component: StudentAdvancedComponent },
                ]
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class StudentsRoutingModule { }