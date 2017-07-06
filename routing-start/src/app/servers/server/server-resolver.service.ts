import { ServerModel } from './server.model';
import { ServersService } from './../servers.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Resolve } from '@angular/Router';

@Injectable()
export class ServerResolver implements Resolve<ServerModel> {
    constructor(private serversService: ServersService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Observable<ServerModel> | Promise<ServerModel> | ServerModel {
        return this.serversService.getServer(+route.params['id']);
    }
}