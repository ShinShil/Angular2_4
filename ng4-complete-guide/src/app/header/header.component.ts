import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html'
})
export class HeaderComponent {
    @Input() recipesPage: string;
    @Input() shoppingPage: string;
    @Output() menuItemClickEvent = new EventEmitter<string>();
    @Input() activePage: string;
    onMenuItemClick(activePage: string) {
        this.menuItemClickEvent.emit(activePage);
    }
}
