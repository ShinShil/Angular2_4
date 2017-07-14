import { AuthService } from '../../auth/auth.service';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit, OnDestroy {
  authSubscription: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authSubscription = this.authService.authStateChanges.subscribe((auth) => {
      if (!auth) {
        alert('Доступ запрещён! Авторизируйтесь для разблокировки!');
        this.router.navigate(['/students']);
      }
    })
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }
}
