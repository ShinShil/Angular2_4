import { DataService } from './../shared/data.service';
import { UserService } from './user.service';
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should be a user from the service', () => {
    const userService = fixture.debugElement.injector.get(UserService);
    expect(userService.user.name).toEqual(component.user.name)
  })

  it('should display the user name if user is logged in', () => {
    const compiled = fixture.nativeElement;
    fixture.detectChanges();
    expect(compiled.querySelector('p').textContent).toContain(component.user.name);
  })

  it('shouldn\'t display the user name if user is logged out', () => {
    const compiled = fixture.nativeElement;
    component.isLoggedIn = false;
    fixture.detectChanges();
    expect(compiled.querySelector('p').textContent).not.toContain(component.user.name);
  })

  it('shouldn\'t fetch data succefully if not called asynchronously', () => {
    const dataService = fixture.debugElement.injector.get(DataService);
    const spy = spyOn(dataService, 'getDetails').and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    expect(component.data).toBe(undefined);
  })

  it('should fetch data succefully if called asynchronously', async(() => {
    const dataService = fixture.debugElement.injector.get(DataService);
    const spy = spyOn(dataService, 'getDetails').and.returnValue(Promise.resolve('Databb'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.data).toBe(undefined);
    })
  }))

  it('should fetch data succefully if called asynchronously', fakeAsync(() => {
      const dataService = fixture.debugElement.injector.get(DataService);
      const spy = spyOn(dataService, 'getDetails').and.returnValue(Promise.resolve('Databbasync'));
      fixture.detectChanges();
      tick();
      fixture.detectChanges();
      expect(component.data).toBe('undefined');
    }))
})

