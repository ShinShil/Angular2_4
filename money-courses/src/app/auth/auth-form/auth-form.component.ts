import { AuthService } from './../auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {
  @ViewChild('email') email;

  constructor(private authService: AuthService) { }

  ngOnInit() {

  }

  onSubmit(f: NgForm, email) {
    this.authService.signin(f.value.email, f.value.password);
  }

}
