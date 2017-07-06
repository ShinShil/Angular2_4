import { Router, ActivatedRoute } from '@angular/router';
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

  constructor(private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.setServer(this.serversService.getServer(+this.route.snapshot.params['id']));
    this.route.params.subscribe(
      (params) => {
        this.setServer(this.serversService.getServer(+params['id']));
      });
    this.serversService.selectedServer.subscribe((server: ServerModel) => {
      this.setServer(server);
    })
  }

  setServer(server: ServerModel) {
    this.server = server;
  }

  onReload() {
    // this.router.navigate(['servers'], { relativeTo: this.route })
  }

}
