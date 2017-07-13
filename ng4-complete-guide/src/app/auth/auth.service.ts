import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
  token: string;
  authSubject = new Subject<boolean>();
  constructor(private fireAuth: AngularFireAuth) {
    fireAuth.idToken.subscribe((data) => {
      if (data) {
        this.token = data['ie'];
      }
    })
  }

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
      error => console.log(error)
      )

  }
  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => {
        firebase.auth().currentUser.getToken()
          .then(token => {
            this.token = token;
            console.log(token);
            this.authSubject.next(true);
          })
      })
      .catch(error => console.log(error))
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
  }

  getToken() {
    firebase.auth().currentUser.getToken()
      .then(token => this.token = token)
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }
}
