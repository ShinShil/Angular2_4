import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online {
            color: white;
        }
    `]
})
export class ServerComponent {

    serverId:number = 10;
    serverStatus:string = '';

    getServerStatus() {
        return this.serverStatus;
    }

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'offline' : 'online';
    }

    getColor() {
        return this.serverStatus === 'offline' ? 'red' : 'green';
    }
}