import { StudentAdvancedComponent } from './students/student-form/student-advanced/student-advanced.component';
import { StudentBasicComponent } from './students/student-form/student-basic/student-basic.component';
import { StudentFormComponent } from './students/student-form/student-form.component';
import { StudentsTableComponent } from './students/students-table/students-table.component';
import { StudentDetailsComponent } from './students/student-details/student-details.component';
import { AuthFormComponent } from './auth/auth-form/auth-form.component';
import { StudentsComponent } from './students/students.component';
import { RecordComponent } from './record/record.component';
import { DetailsComponent } from './details/details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    { path: '', component: DetailsComponent, pathMatch: 'full' },
    { path: 'record', component: RecordComponent, data: {recordMode: true} },
    {
        path: 'students', component: StudentsComponent, children: [
            { path: '', component: StudentsTableComponent },
            { path: 'details/:index', component: StudentDetailsComponent },
            { path: 'edit/:index', component: StudentFormComponent, children: [
                { path: '', redirectTo: 'basic', pathMatch: 'full'},
                { path: 'basic', component: StudentBasicComponent },
                { path: 'adv', component: StudentAdvancedComponent },
            ] },
            { path: 'create', component: StudentFormComponent, children: [
                { path: '', redirectTo: 'basic', pathMatch: 'full'},
                { path: 'basic', component: StudentBasicComponent },
                { path: 'adv', component: StudentAdvancedComponent },
            ] },
        ]
    },
    { path: 'login', component: AuthFormComponent, pathMatch: 'full' },
    { path: '**', redirectTo: '' }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }