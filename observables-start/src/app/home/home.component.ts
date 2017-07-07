import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/Rx';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  myNumbersSubscription: Subscription;
  myObservableSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    const myNumbers = Observable.interval(1000);
    this.myNumbersSubscription = myNumbers.subscribe(
      (number: number) => {
        console.log(number);
      }
    )

    const myObservable = Observable.create(
      (observer: Observer<string>) => {
        setTimeout(() => {
          observer.next('first package');
        }, 2000);
        setTimeout(() => {
          observer.next('second package');
        }, 4000);
        setTimeout(() => {
          // observer.error('this does not work');
          observer.complete();
        }, 5000);
        setTimeout(() => {
          observer.next('third package')
        }, 6000);
      });

    this.myObservableSubscription = myObservable.subscribe(
      (data: string) => {
        console.log(data)
      }, (error: string) => {
        console.log(error)
      }, () => {
        console.log('complete')
      }
    )
  }
  ngOnDestroy() {
    this.myNumbersSubscription.unsubscribe()
    this.myObservableSubscription.unsubscribe()
  }
}
