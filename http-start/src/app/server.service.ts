import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ServerService {
    constructor(private http: Http) { }

    storeServers(servers: any[]) {
        const headers = new Headers({ 'Content-type': 'application/json' });
        // return this.http.post(
        //     'https://udemy-ng-http-694f0.firebaseio.com/data.json',
        //     servers,
        //     { headers: headers });
        return this.http.put(
            'https://udemy-ng-http-694f0.firebaseio.com/data.json',
            servers,
            { headers: headers });
    }

    getServers() {
        return this.http.get('https://udemy-ng-http-694f0.firebaseio.com/data.json')
            .map((request: Response) => {
                const data = request.json();
                for (const server of data) {
                    server.name = 'FETCHED_' + server.name;
                }
                return data;
            });
    }
}