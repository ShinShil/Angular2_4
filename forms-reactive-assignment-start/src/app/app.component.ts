import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectStatuses = [
    'Stable',
    'Crictical',
    'Finished'
  ];
  forbiddenProjectNames = [
    'Test'
  ]
  asyncForbiddenProjectNames = [
    'AsyncTest'
  ]
  projectForm = new FormGroup({
    'projectName': new FormControl(
      null,
      [Validators.required, this.forbiddenProjectNamesSync.bind(this)],
      [this.forbiddenProjectNamesAsync.bind(this)]
    ),
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'projectStatus': new FormControl('Stable')
  })

  ngOnInit() {

  }

  forbiddenProjectNamesSync(control: FormControl): { [key: string]: boolean } {
    if (this.forbiddenProjectNames.indexOf(control.value) !== -1) {
      return { 'nameForbidden': true }
    } else {
      return null;
    }
  }

  forbiddenProjectNamesAsync(control: FormControl): Promise<any> | Observable<any> {
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (this.asyncForbiddenProjectNames.indexOf(control.value) !== -1) {
          resolve({ 'asyncNameForbidden': true })
        } else {
          resolve(null);
        }
      }, 1500);
    })
  }

  onSubmit() {
    console.log(this.projectForm);
  }
}
