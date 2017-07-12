import { Student } from './../student.model';
import { StudentsService } from './../students.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  students: Student[];
  constructor(private studentsService: StudentsService) { }

  ngOnInit() {
    this.students = this.studentsService.getStudents();
    this.subscription = this.studentsService.studentsChanged.subscribe((students: Student[]) => {
      this.students = students;
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onDeleteStudent(index: number) {
    this.studentsService.deleteStudent(index);
  }
}
