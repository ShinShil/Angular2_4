import { Router, ActivatedRoute } from '@angular/router';
import { StudentsService } from './../../students.service';
import { Student } from './../../student.model';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.css']
})
export class StudentsTableComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  students: Student[];
  constructor(private studentsService: StudentsService
    , private router: Router
    , private route: ActivatedRoute) { }

  ngOnInit() {
    this.students = this.studentsService.getStudents();
    this.subscription = this.studentsService.studentsChanged.subscribe((students: Student[]) => {
      this.students = students;
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  onCreate() {
    this.router.navigate(['create'], { relativeTo: this.route });
  }
  onDeleteStudent(index: number) {
    this.studentsService.deleteStudent(index);
  }
  onEditStudent(index: number) {
    this.router.navigate(['edit', index], { relativeTo: this.route });
  }
  toDetails(index: number) {
    this.router.navigate(['details', index], { relativeTo: this.route });
  }
}
