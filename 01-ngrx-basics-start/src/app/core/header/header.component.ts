import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';

import { TryLogout } from '../../auth/store/auth.actions';
import { State } from '../../auth/store/auth.reducers';
import { FetchRecipes, StoreRecipes } from '../../recipes/store/recipe.actions';
import { AppState } from '../../store/app.reducers';

// import { HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  authState: Observable<State>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.authState = this.store.select('auth');
  }

  onSaveData() {
    this.store.dispatch(new StoreRecipes());
  }

  onFetchData() {
    this.store.dispatch(new FetchRecipes());
  }

  onLogout() {
    this.store.dispatch(new TryLogout());
  }
}
