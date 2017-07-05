import { CounterService } from './services/counter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  movesToActive = 0;
  movesToInactive = 0;

  constructor(private counterService: CounterService) { }

  ngOnInit() {
    this.movesToActive = this.counterService.inactiveToActive;
    this.movesToInactive = this.counterService.activeToInactive;
  }
}
