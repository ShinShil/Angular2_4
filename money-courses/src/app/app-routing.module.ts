import { StudentsComponent } from './students/students.component';
import { RecordComponent } from './record/record.component';
import { DetailsComponent } from './details/details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    { path: '', component: DetailsComponent, pathMatch: 'full' },
    { path: 'record', component: RecordComponent },
    { path: 'students', component: StudentsComponent },
    { path: '**', redirectTo: ''}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }