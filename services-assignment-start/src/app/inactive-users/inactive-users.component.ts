import { CounterService } from './../services/counter.service';
import { UsersService } from './../services/users.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: string[];

  constructor(private usersService: UsersService, private counterService: CounterService) {}

  onSetToActive(id: number) {
    this.usersService.SetToActive(id);
  }
}
