import { Logger } from './../shared/logger.functions';
import { Student } from './../student.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthService {

  token: string;
  authStateChanges = new Subject<boolean>();

  constructor(private fireAuth: AngularFireAuth,
    private router: Router,
    private route: ActivatedRoute) {
    fireAuth.auth.onIdTokenChanged((token) => {
      this.token = token;
      this.authStateChanges.next(this.isAuthenticated());
    })
  }

  signout() {
    this.fireAuth.auth.signOut()
      .catch((error) => {
        console.log('Error in sign out account');
        console.log(error);
      })
      .then((success) => {
        console.log('Success in sign out account');
        console.log(success);
      })
  }

  signin(email: string, password: string) {
    return this.fireAuth.auth.signInWithEmailAndPassword(email, password);
  }
  signup(email: string, password: string) {
    this.fireAuth.auth.createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        console.log('Error in creating student account');
        console.log(error);
      })
      .then((success) => {
        console.log('Account has succesfully created');
        console.log(success);
      })
  }

  isAuthenticated(): boolean {
    return this.token != null && !(typeof this.token === 'undefined');
  }

  generateAccount(student: Student): { login: string, password: string } {
    const login = student.email;
    const password = '123456'
    return { login: login, password: password };
  }
}
