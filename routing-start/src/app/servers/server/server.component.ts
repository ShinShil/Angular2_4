import { ServerModel } from './server.model';
import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: ServerModel;

  constructor(private serversService: ServersService) { }

  ngOnInit() {
    this.setServer(this.serversService.getServer(1));
    this.serversService.selectedServer.subscribe((server: ServerModel) => {
      this.setServer(server);
    })    
  }

  setServer(server: ServerModel) {
    this.server = server;
  }

}
