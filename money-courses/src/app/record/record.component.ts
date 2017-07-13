import { AuthService } from './../auth/auth.service';
import { DatastorageService } from './../datastorage.service';
import { StudentsService } from './../students.service';
import { PhoneInputDirective } from './phone-input.directive';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {

  recordForm: FormGroup;

  constructor(private studentsService: StudentsService,
    private database: DatastorageService,
    private authService: AuthService) { }

  ngOnInit() {
    this.recordForm = new FormGroup({
      'name': new FormControl(null, [Validators.required, Validators.maxLength(20)]),
      'surname': new FormControl(null, [Validators.required, Validators.maxLength(25)]),
      'email': new FormControl(null, [Validators.required, Validators.email],
        this.studentsFieldExistsValidatorAsync('email').bind(this)),
      'phone': new FormControl(null,
        [
          Validators.required,
          this.phoneValidator
        ],
        this.studentsFieldExistsValidatorAsync('phone').bind(this))
    })
  }

  onSubmit() {
    const res = this.studentsService.createStudent(this.recordForm.value);
    if (res != null) {
      const message: string = res.message;
      this.recordForm.get(res.control).setErrors({ 'serverError': message });
    } else {
      const acc = this.authService.generateAccount(this.recordForm.value);
      // this.authService.signup(acc.login, acc.password);
      this.recordForm.reset();
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
