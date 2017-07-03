import { Component } from '@angular/core';

@Component ({
    selector: 'app-warning-alert',
    template: '{{<span>text</span>}}',
    styles: ['color: red']
})
export class WarningAlertComponent {
    text = 'warning';
}