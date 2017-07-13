import { AuthService } from './auth/auth.service';
import { Student } from './student.model';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class DatastorageService {
  students: FirebaseListObservable<any[]>;
  student: FirebaseObjectObservable<any>;
  constructor(private db: AngularFireDatabase, private authService: AuthService) {
    this.students = db.list('/students');
  }

  createStudent(student: Student) {
    return this.students.push(student);
  }

  updateStudent(key: string, student: Student) {
    return new Promise((resolve, reject) => {
      this.db.object('/students/' + key).update(student)
        .catch((error) => {
          alert('Действие не разрешено, авторизируйтесь.');
          reject(error);
        })
        .then((data) => resolve(data));
    })
  }

  deleteStudent(key: string) {
    return new Promise((resolve, reject) => {
      this.db.object('/students/' + key).remove()
        .catch((error) => {
          alert('Действие не разрешено, авторизируйтесь.');
          reject(error);
        })
        .then((data) => resolve(data));
    })
  }
}
