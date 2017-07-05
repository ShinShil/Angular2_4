import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recipesPage = 'app-recipes';
  shoppingPage = 'app-shopping-list';
  activePage = this.recipesPage;
  onMenuItemClicked(activePage: string) {
    this.activePage = activePage;
  }
}
