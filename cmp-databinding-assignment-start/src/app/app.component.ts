import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: Number[] = [];
  evenNumbers: Number[] = [];
  onNumIncremented(eventData: { val: Number }) {
    +eventData.val % 2 === 0 ? this.evenNumbers.push(eventData.val) : this.oddNumbers.push(eventData.val);
  }
}
