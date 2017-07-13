import { StudentsService } from './../../students.service';
import { Student } from './../../student.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  student: Student;
  index: number;
  constructor(
    private router: Router
    , private route: ActivatedRoute
    , private studentsService: StudentsService
  ) {
  }

  ngOnInit() {
    this.student = this.studentsService.students[+this.route.snapshot.params['index']];
    this.index = +this.route.snapshot.params['index'];
    this.studentsService.studentsChanged.subscribe((students) => {
      this.student = students[this.index];
    });
    this.route.params.subscribe((params) => {
      this.index = +this.route.snapshot.params['index'];
      this.student = this.studentsService.students[this.index];
    })
    
  }

  toList() {
    this.router.navigate(['/students'])
  }
}
