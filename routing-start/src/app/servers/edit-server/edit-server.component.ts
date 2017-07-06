import { ActivatedRoute } from '@angular/router';
import { ServerModel } from './../server/server.model';
import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: ServerModel;
  serverName = '';
  serverStatus = '';

  constructor(private serversService: ServersService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    this.route.queryParams.subscribe();
    this.route.fragment.subscribe();
    this.setServer(this.serversService.getServer(1));
    this.serversService.selectedServer.subscribe((server: ServerModel) => {
      this.setServer(server);
    })
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

  setServer(server: ServerModel) {
    this.server = server;
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }
}
