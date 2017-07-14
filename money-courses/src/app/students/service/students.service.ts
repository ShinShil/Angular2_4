import { StudentStorageService } from './student-storage.service';
import { Student } from '../student.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class StudentsService {
  studentsChanged = new Subject<Student[]>()

  students: Student[] = [];

  constructor(private database: StudentStorageService, private router: Router) {
    database.students.subscribe(
      (data) => {
        this.students = data;
        this.studentsChanged.next(this.getStudents());
      },
      (error) => {
        console.log('ERROR in constructor of studentsservice');
        console.log(error);
      }
    )
  }

  getStudents() {
    return this.students.slice();
  }

  updateStudent(index: number, student: Student) {
    let err: { control: string, message: string } = null;
    const oldMail = this.students[index].email;
    const oldPhone = this.students[index].phone;
    for (const st of this.students) {
      if (st.email === student.email && st.email !== oldMail) {
        const s = 'Адрес электронной почты "' + st.email + '" уже занят';
        err = { control: 'email', message: s }
        break;
      }
      if (st.phone === student.phone && st.phone !== oldPhone) {
        const s = 'Телефонный номер "' + st.phone + '" уже используется';
        err = { control: 'phone', message: s }
        break;
      }
    }
    return new Promise((resolve, reject) => {
      if (err != null) {
        reject(err);
      } else {
        this.database.updateStudent(this.students[index].$key, student)
          .then((data) => resolve(data))
          .catch((error) => reject(error));
      }
    });
  }

  createStudent(student: Student): Promise<any> {
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
    return new Promise((resolve, reject) => {
      if (err != null) {
        reject(err);
      } else {
        this.database.createStudent(student)
          .then((data) => resolve(data))
          .catch((error) => reject(error));
      }
    });
  }

  isFieldValUntouched(index: number, field: string, value: string): boolean {
    return this.students[index][field] === value;
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
    return this.database.deleteStudent(this.students[index].$key);
  }

  commonDeleteAction(index: number) {
    if (confirm('Вы действительно хотите удалить студента')) {
      this.deleteStudent(index)
        .then((data) => {
          this.router.navigate(['/students']);
        })
        .catch((error) => {
          console.log(error);
          alert('Не удалось удалить студента');
        })
    }
  }
}
