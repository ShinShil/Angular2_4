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

  constructor(private studentsService: StudentsService
    , private router: Router
    , private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
