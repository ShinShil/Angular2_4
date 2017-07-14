import { StudentDetailsComponent } from './students/student-details/student-details.component';
import { AuthService } from './auth/auth.service';
import { DatastorageService } from './datastorage.service';
import { StudentsService } from './students.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DetailsComponent } from './details/details.component';
import { RecordComponent } from './record/record.component';
import { PhoneInputDirective } from './record/phone-input.directive';
import { StudentsComponent } from './students/students.component';
import { AuthComponent } from './auth/auth.component';
import { AuthFormComponent } from './auth/auth-form/auth-form.component';
import { PhoneHiderPipe } from './students/phone-hider.pipe';
import { MailHiderPipe } from './students/mail-hider.pipe';
import { StudentsTableComponent } from './students/students-table/students-table.component';
import { StudentFormComponent } from './students/student-form/student-form.component';
import { StudentBasicComponent } from './students/student-form/student-basic/student-basic.component';
import { StudentAdvancedComponent } from './students/student-form/student-advanced/student-advanced.component';
import { StudentEditTabsComponent } from './students/student-form/student-edit-tabs/student-edit-tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DetailsComponent,
    RecordComponent,
    PhoneInputDirective,
    StudentsComponent,
    AuthComponent,
    AuthFormComponent,
    PhoneHiderPipe,
    MailHiderPipe,
    StudentsTableComponent,
    StudentFormComponent,
    StudentDetailsComponent,
    StudentBasicComponent,
    StudentAdvancedComponent,
    StudentEditTabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [StudentsService, DatastorageService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
