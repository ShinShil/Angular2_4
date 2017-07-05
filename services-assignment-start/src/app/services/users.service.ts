import { EventEmitter } from '@angular/core';
export class UsersService {
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    moveInactiveToActive = new EventEmitter<void>();
    moveActiveToInactive = new EventEmitter<void>();

    SetToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.moveActiveToInactive.emit();
    }

    SetToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.moveInactiveToActive.emit();
    }
}