import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs/Rx';

import { AuthService } from '../../../auth/auth.service';
import { CanComponentDeactivate } from '../../../core/service/can-deactivate-guard.service';
import { StudentsService } from '../../service/students.service';
import { Student } from '../../student.model';
import { PhoneInputDirective } from './phone-input.directive';


@Component({
  selector: 'app-student-basic',
  templateUrl: './student-basic.component.html',
  styleUrls: ['./student-basic.component.css']
})
export class StudentBasicComponent implements OnInit, OnDestroy, CanComponentDeactivate {

  authSubscription: Subscription;
  index: number;
  editMode: boolean;
  studentForm: FormGroup;
  student: Student;
  recordMode: boolean;
  changesSaved: boolean;
  @Output() studentCreated = new EventEmitter(); // for record

  constructor(
    private studentsService: StudentsService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if (this.changesSaved || !this.authService.isAuthenticated()) {
      return true;
    } else if (this.studentForm.invalid) {
      this.studentForm.get('name').markAsTouched();
      this.studentForm.get('surname').markAsTouched();
      this.studentForm.get('email').markAsTouched();
      this.studentForm.get('phone').markAsTouched();
      alert('Некоторые поля не валидны');
      return false;
    }else if (!this.editMode && !this.changesSaved) {
      alert('Сохраните изменения на данной странице');
      return false;
    }
     else if (
      this.student.name === this.studentForm.value.name
      && this.student.surname === this.studentForm.value.surname
      && this.student.email === this.studentForm.value.email
      && this.student.phone === this.studentForm.value.phone) {
      return true;
    }
    return confirm('Внесённые вами данные не сохранятся, вы уверены, что хотите перейти?');
  }

  ngOnInit() {
    this.index = +this.route.snapshot.parent.params['index'];
    this.editMode = this.index !== null && !isNaN(this.index);
    this.setupForm();
    this.recordMode = this.route.snapshot.data['recordMode'];
    this.changesSaved = false;
  }

  private setupForm() {
    if (this.editMode) {
      this.student = this.studentsService.students[this.index];
      if (!this.student) {
        this.studentsService.studentsChanged.subscribe((students) => {
          const student = students[this.index];
          this.initForm(student.name, student.surname, student.email, student.phone);
          this.student = student;
        })
      } else {
        this.initForm(this.student.name, this.student.surname, this.student.email, this.student.phone);
      }
    } else {
      this.initForm(null, null, null, null);
    }
  }

  private initForm(name: string, surname: string, email: string, phone: string) {
    this.studentForm = new FormGroup({
      'name': new FormControl(name, [Validators.required, Validators.maxLength(20)]),
      'surname': new FormControl(surname, [Validators.required, Validators.maxLength(25)]),
      'email': new FormControl(email, [Validators.required, Validators.email],
        this.studentsFieldExistsValidatorAsync('email').bind(this)
      ),
      'phone': new FormControl(phone,
        [
          Validators.required,
          this.phoneValidator
        ],
        this.studentsFieldExistsValidatorAsync('phone').bind(this))
    })
  }

  onSubmit() {
    if (!this.editMode) {
      this.studentsService.createStudent(this.studentForm.value)
        .then((data) => {
          this.changesSaved = true;
          this.studentForm.reset();
          this.studentCreated.emit();
          this.router.navigate(['/students']);
        })
        .catch((error) => {
          console.log(error);
          if (error.control) {
            this.studentForm.get(error.control).setErrors({ 'serverError': error.message });
          }
        });
    } else {
      this.studentsService.updateStudent(this.index, this.studentForm.value)
        .then((data) => {
          this.changesSaved = true;
          this.router.navigate(['/students'], { relativeTo: this.route });
        })
        .catch((error) => {
          console.log(error);
          if (error.control) {
            this.studentForm.get(error.control).setErrors({ 'serverError': error.message });
          }
        });
    }
  }

  onCancel() {
    this.router.navigate(['/students'], { relativeTo: this.route });
  }

  onDelete() {
    if (confirm('Вы действительно хотите удалить студента?')) {
      this.studentsService.deleteStudent(this.index)
        .then((data) => {
          this.router.navigate(['/students']);
        })
        .catch((data) => {
          alert('Не удалось удалить студента');
        })
    }
  }

  ngOnDestroy() {

  }

  phoneValidator(control: FormControl): { [s: string]: boolean } {
    if (PhoneInputDirective.formatValue(control.value).length < 9) {
      return { 'phoneValidator': true };
    }
    return null;
  }

  studentsFieldExistsValidatorAsync = (fieldname: string) => {
    return (control: FormControl): Promise<any> | Observable<any> => {
      return new Promise((resolve, reject) => {
        if (this.studentsService.isValExists(fieldname, control.value)
          && !this.studentsService.isFieldValUntouched(this.index, fieldname, control.value)) {
          const s = fieldname + 'Exists';
          resolve({ [s]: true });
        } else {
          resolve(null)
        }
      })
    }
  }
}
