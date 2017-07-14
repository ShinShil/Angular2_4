import { StudentStorageService } from './student-storage.service';
import { Student } from '../student.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class StudentsService {
  studentsChanged = new Subject<Student[]>()

  students: Student[] = [];

  constructor(private database: StudentStorageService) {
    database.students.subscribe(
      (data) => {
        this.students = data;
        this.studentsChanged.next(this.getStudents());
      },
      (error) => {
        console.log('ERROR in students service');
        console.log(error);
      }
    )
  }

  getStudents() {
    return this.students.slice();
  }

  updateStudentd(index: number, student: Student) {
    this.database.updateStudent(this.students[index].$key, student);
  }

  createStudent(student: Student): { control: string, message: string } {
    let err: { control: string, message: string } = null;
    for (const st of this.students) {
      if (st.email === student.email) {
        const s = 'Адрес электронной почты "' + st.email + '" уже занят';
        err = { control: 'email', message: s }
        break;
      }
      if (st.phone === student.phone) {
        const s = 'Телефонный номер "' + st.phone + '" уже используется';
        err = { control: 'phone', message: s }
        break;
      }
    }
    if (err == null) {
      this.database.createStudent(student);
    }
    return err;
  }

  isValExists(field: string, value: string) {
    for (const st of this.students) {
      if (st[field] === value) {
        return true;
      }
    }
    return false;
  }

  deleteStudent(index: number) {
    this.database.deleteStudent(this.students[index].$key).catch((error) => console.log(error));
  }
}
