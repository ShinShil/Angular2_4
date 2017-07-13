import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {
  @ViewChild('email') email;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {

  }

  onSubmit(f: NgForm, email) {
    this.authService.signin(f.value.email, f.value.password).then(data => this.location.back());
  }

}
