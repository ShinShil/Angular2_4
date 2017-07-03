import { Component } from '@angular/core';

@Component ({
    selector: 'app-success-alert',
    template: '{{text}}',
    styles: [
        'color: green'
    ]
})
export class SuccessAlertComponent {
    text = 'success';
}