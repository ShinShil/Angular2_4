import { AuthService } from '../../../auth/auth.service';
import { StudentsService } from '../../service/students.service';
import { Student } from '../../student.model';

import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
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

  constructor(
    private studentsService: StudentsService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.changesSaved = false;
  }

  setupForm() {

  }

  initForm() {

  }


}
