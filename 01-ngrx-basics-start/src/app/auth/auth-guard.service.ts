import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';

import { AppState } from '../store/app.reducers';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private store: Store<AppState>) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select('auth')
      .take(1)
      .map(authState => authState.authenticated);
  }
}
