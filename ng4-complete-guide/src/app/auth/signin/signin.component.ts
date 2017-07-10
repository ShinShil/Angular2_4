import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.authSubject.subscribe((success: boolean) => {
      if (success) {
        this.router.navigate(['/recipes']);
      }
    })
  }

  onSubmit(f: NgForm) {
    const email = f.value.email;
    const password = f.value.password;
    this.authService.signinUser(email, password);
  }

}
