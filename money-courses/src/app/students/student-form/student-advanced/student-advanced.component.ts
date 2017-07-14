import { AuthService } from '../../../auth/auth.service';
import { StudentsService } from '../../service/students.service';
import { Student } from '../../student.model';

import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-student-advanced',
  templateUrl: './student-advanced.component.html',
  styleUrls: ['./student-advanced.component.css']
})
export class StudentAdvancedComponent implements OnInit {

  advForm: FormGroup;
  index: number;
  student: Student;
  changesSaved: boolean;
  busy: boolean;

  constructor(
    private studentsService: StudentsService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.index = +this.route.snapshot.parent.params['index'];
    this.setupForm();
    this.changesSaved = false;
  }

  setupForm() {
    this.student = this.studentsService.students[this.index];
    const adv = new FormArray([]);
    if (!this.student) {
      this.studentsService.studentsChanged.subscribe((students) => {
        const student = students[this.index];
        if (student['adv']) {
          for (const t of student['adv']) {
            adv.push(new FormGroup({
              'name': new FormControl(t.name, Validators.required),
              'value': new FormControl(t.value, Validators.required)
            }))
          }
        }
        this.initForm(adv);
        this.student = student;
      })
    } else {
      if (this.student['adv']) {
        for (const t of this.student['adv']) {
          adv.push(new FormGroup({
            'name': new FormControl(t.name, Validators.required),
            'value': new FormControl(t.value, Validators.required)
          }))
        }
      }
      this.initForm(adv);
    }
  }

  initForm(adv: FormArray) {
    this.advForm = new FormGroup({
      'newName': new FormControl(null, Validators.required),
      'newValue': new FormControl(null, Validators.required),
      'adv': adv
    });
  }

  getAdvControls() {
    return (<FormArray>this.advForm.get('adv')).controls;
  }

  isStudentSet(student: Student) {
    return student !== null && typeof student !== 'undefined';
  }

  onAddProperty() {
    if (this.advForm.get('newName').valid && this.advForm.get('newValue').valid) {
      (<FormArray>this.advForm.get('adv')).push(new FormGroup({
        'name': new FormControl(this.advForm.get('newName').value, Validators.required),
        'value': new FormControl(this.advForm.get('newValue').value, Validators.required),
      }))
    }
    this.advForm.get('newName').reset();
    this.advForm.get('newValue').reset();
  }

  getAdvArray() {
    return (<FormArray>this.advForm.get('adv'));
  }

  onDeleteAdv(index: number) {
    (<FormArray>this.advForm.get('adv')).removeAt(index);
  }

  onSubmit() {
    this.student.adv = this.advForm.value.adv;
    this.studentsService.updateStudent(this.index, this.student)
      .then((data) => {
        console.log('Updated');
        this.setupForm();
      })
      .catch((error) => {
        console.log('Error');
        console.log(error);
      })
  }
}