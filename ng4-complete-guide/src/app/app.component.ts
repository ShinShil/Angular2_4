import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCwichxD6Yvm-UluzYAR_ku6SE63QgrW6c',
      authDomain: 'ng-recipe-book-73a68.firebaseapp.com'
    })
  }
}
