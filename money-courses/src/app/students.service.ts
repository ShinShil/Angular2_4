import { Student } from './student.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class StudentsService {
  studentsChanged = new Subject<Student[]>()

  students: Student[] = [
    new Student('John', 'Vanovich', 'test@test.com', '2542341')
  ];

  constructor() { }

  getStudents() {
    return this.students.slice();
  }

  updateStudentd(index: number, student: Student) {
    this.students[index] = student;
    this.studentsChanged.next(this.getStudents());
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
      this.students.push(student);
      this.studentsChanged.next(this.getStudents());
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
    this.students.splice(index, 1);
    this.studentsChanged.next(this.getStudents());
  }

  saveStudents() {

  }

  fetchStudents() {

  }

}
