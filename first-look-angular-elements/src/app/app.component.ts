import { Component, OnInit, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AlertComponent } from './alert.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  content = null;  

  constructor(private injector: Injector, private domSanitize: DomSanitizer) { }

  ngOnInit() {
    const AlertElement = createCustomElement(AlertComponent, { injector: this.injector });
    customElements.define('my-alert', AlertElement);
    setTimeout(() => {
      this.content = this.domSanitize.bypassSecurityTrustHtml('<my-alert message="Natieve elemt is wroking, WoW! :)"></my-alert>');
    }, 1000)
  }
}
