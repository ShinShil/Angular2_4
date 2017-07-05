import { Injectable } from '@angular/core';

import { UsersService } from './users.service';

@Injectable()
export class CounterService {
    inactiveToActive = 0;
    activeToInactive = 0;

    constructor(private usersService: UsersService) {
        this.usersService.moveActiveToInactive.subscribe(() => { this.activeToInactive++ });
        this.usersService.moveInactiveToActive.subscribe(() => { this.inactiveToActive++ });
    }
}