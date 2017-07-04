import { EvenComponent } from './even/even.component';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  num = 0;
  interval;
  @Output() numIncremented = new EventEmitter<{val: number}>();

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    this.interval = setInterval(() => {
      this.num++;
      this.numIncremented.emit({val: this.num});
    }, 1000);
  }

  onStopGame() {
    clearInterval(this.interval);
  }
}
