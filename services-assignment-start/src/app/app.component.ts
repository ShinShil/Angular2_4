import { CounterService } from './services/counter.service';
import { UsersService } from './services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activeUsers: string[] = [];
  inactiveUsers: string[] = [];
  movesToActive = 0;
  movesToInactive = 0;

  constructor(private usersService: UsersService, private counterService: CounterService) { }

  ngOnInit() {
    this.activeUsers = this.usersService.activeUsers;
    this.inactiveUsers = this.usersService.inactiveUsers;
    this.movesToActive = this.counterService.inactiveToActive;
    this.movesToInactive = this.counterService.activeToInactive;
  }
}
