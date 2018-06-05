import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from "@angular/core";
import { TrySignup, TRY_SIGNUP, SIGNUP, SET_TOKEN, TRY_SIGNIN, TrySignin, SIGNIN, AuthFail, TRY_LOGOUT, LOGOUT, Logout, SetToken, Signin } from './auth.actions';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { fromPromise } from 'rxjs/internal-compatibility';
import { of, defer } from 'rxjs';

@Injectable()
export class AuthEffects {
    @Effect()
    authSignup = this.actions$
        .ofType(TRY_SIGNUP)
        .map((action: TrySignup) => action.payload)
        .switchMap(({ username, password }) => fromPromise(firebase.auth().createUserWithEmailAndPassword(username, password)))
        .switchMap(() => fromPromise(this.router.navigate(['/'])))
        .switchMap(() => fromPromise(firebase.auth().currentUser.getIdToken()))
        .mergeMap(token => [{
            type: SIGNUP
        },
        {
            type: SET_TOKEN,
            payload: token
        }])
        .catch(err => of(new AuthFail(err)));

    @Effect()
    authSignin = this.actions$
        .ofType(TRY_SIGNIN)
        .map((action: TrySignin) => action.payload)
        .switchMap(({ username, password }) => {
            return defer(() => firebase.auth().signInWithEmailAndPassword(username, password))
                .switchMap(() => fromPromise(this.router.navigate(['/'])))
                .switchMap(() => fromPromise(firebase.auth().currentUser.getIdToken()))
                .mergeMap(token => [new Signin(), new SetToken(token)])
                .catch(err => of(new AuthFail(err)))
        });

    @Effect()
    authLogout = this.actions$
        .ofType(TRY_LOGOUT)
        .switchMap(() => fromPromise(firebase.auth().signOut()))
        .map(() => new Logout());

    constructor(private actions$: Actions, private router: Router) { }
}