import { Observable } from 'rxjs/Observable';
import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ServerModel } from './../server/server.model';
import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanDeactivateGuard {
  server: ServerModel;
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSave = false;
  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit() {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    this.route.params.subscribe((params) => {
      this.setServer(this.serversService.getServer(+this.route.snapshot.params['id']));
    })
    this.route.queryParams.subscribe((params) => {
      this.allowEdit = params['allowEdit'] === '1' ? true : false;
    });
    this.route.fragment.subscribe();
    this.setServer(this.serversService.getServer(+this.route.snapshot.params['id']));
    this.serversService.selectedServer.subscribe((server: ServerModel) => {
      this.setServer(server);
    })
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, { name: this.serverName, status: this.serverStatus });
    this.changesSave = true;
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  setServer(server: ServerModel) {
    this.server = server;
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }
  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if (!this.allowEdit) {
      return true;
    }

    if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSave) {
      return confirm('Do you want to discard');
    } else {
      return true;
    }

  }
}
