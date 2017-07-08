import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ServerService {
    constructor(private http: Http) {}

    storeServers(servers: any[]) {
        return this.http.post('https://udemy-ng-http-694f0.firebaseio.com/data.json', servers);
    }
}