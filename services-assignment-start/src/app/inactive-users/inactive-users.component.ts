import { CounterService } from './../services/counter.service';
import { UsersService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{
  users: string[];

  constructor(private usersService: UsersService)  {}

  onSetToActive(id: number) {
    this.usersService.SetToActive(id);
  }

  ngOnInit() {
    this.users = this.usersService.inactiveUsers;
  }
}
