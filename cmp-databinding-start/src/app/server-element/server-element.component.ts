import {
  SimpleChanges,
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy {
  @Input('srvElement') element: {
    type: string,
    content: string,
    name: string
  };
  @Input() name: string;
  @ViewChild('heading') header: ElementRef
  @ContentChild('contentParagraph') contentParagraph: ElementRef;

  constructor() {
    console.log('Contructor called!');
  }

  ngOnInit() {
    console.log('ngOnInit called!');
    console.log('Header content: ' + this.header.nativeElement.textContent);
    console.log('Paragraph content: ' + this.contentParagraph.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngDoCheck() {
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
    console.log('Header content: ' + this.header.nativeElement.textContent);
    console.log('Paragraph content: ' + this.contentParagraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called!');
    console.log('Header content: ' + this.header.nativeElement.textContent);
    console.log('Paragraph content: ' + this.contentParagraph.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called!');
  }

}
