import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-alert',
    template: '<div>{{message}}</div>',
    styles: [
        `
            div {
                border: 1px black solid;
                padding: 10px;
                background-color: salmon;
            }
        `
    ]
})
export class AlertComponent {
    @Input() message: string;
}