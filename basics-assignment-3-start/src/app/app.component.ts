import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clicks = [];
  display = false;
  currClick = 0;

  toggleDisplay() {
    this.display = !this.display;
  }

  addClick() {
    this.clicks.push(this.currClick++);
  }

  getBgColor(index: number) {
    return index > 4 ? 'blue' : 'white';
  }
}
