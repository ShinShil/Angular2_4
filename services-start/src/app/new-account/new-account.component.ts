import { AccountsService } from './../shared/accounts.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from './../shared/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]
})
export class NewAccountComponent {
  constructor(private loggingService: LoggingService,
    private accountsService: AccountsService) {
    this.accountsService.statusUpdated.subscribe((status: string) => {
      alert('status updated to ' + status);
    })
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus)
  }
}
