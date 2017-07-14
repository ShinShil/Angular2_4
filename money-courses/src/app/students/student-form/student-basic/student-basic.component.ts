import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { AuthService } from '../../../auth/auth.service';
import { StudentStorageService } from '../../service/student-storage.service';
import { StudentsService } from '../../service/students.service';
import { Student } from '../../student.model';
import { PhoneInputDirective } from './phone-input.directive';


@Component({
  selector: 'app-student-basic',
  templateUrl: './student-basic.component.html',
  styleUrls: ['./student-basic.component.css']
})
export class StudentBasicComponent implements OnInit {

  index: number;
  editMode: boolean;
  studentForm: FormGroup;
  student: Student;
  recordMode: boolean;
  @Output() studentCreated = new EventEmitter(); // for record

  constructor(private studentsService: StudentsService,
    private database: StudentStorageService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.index = +this.route.snapshot.parent.params['index'];
    this.editMode = this.index !== null && !isNaN(this.index);
    this.setupForm();
    this.recordMode = this.route.snapshot.data['recordMode'];
  }

  private setupForm() {
    if (this.editMode) {
      this.student = this.studentsService.students[this.index];
      if (!this.student) {
        this.studentsService.studentsChanged.subscribe((students) => {
          const student = students[this.index];
          console.log(student.surname);
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
        this.studentsFieldExistsValidatorAsync('email').bind(this)),
      'phone': new FormControl(phone,
        [
          Validators.required,
          this.phoneValidator
        ],
        this.studentsFieldExistsValidatorAsync('phone').bind(this))
    })
  }

  onSubmit() {
    const res = this.studentsService.createStudent(this.studentForm.value);
    if (res != null) {
      const message: string = res.message;
      this.studentForm.get(res.control).setErrors({ 'serverError': message });
    } else {
      // const acc = this.authService.generateAccount(this.studentForm.value);
      // this.authService.signup(acc.login, acc.password);
      this.studentForm.reset();
    }
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
        if (this.studentsService.isValExists(fieldname, control.value)) {
          const s = fieldname + 'Exists';
          resolve({ [s]: true });
        } else {
          resolve(null)
        }
      })
    }
  }
}
