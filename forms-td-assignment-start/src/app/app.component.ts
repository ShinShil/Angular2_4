import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  defaultSubscription = 'advanced';
  user = {
    email: '',
    subscription: '',
    password: ''
  }
  submitted = false;

  ngOnInit() {
    console.log(this.signupForm);
  }

  onSubmit() {
    console.log(this.signupForm);
    this.user.email = this.signupForm.value.email;
    this.user.subscription = this.signupForm.value.subscription;
    this.user.password = this.signupForm.value.password;      
    this.submitted = true;
  }
}
