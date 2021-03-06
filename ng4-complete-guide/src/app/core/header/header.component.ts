import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './../../auth/auth.service';
import { Subscription } from 'rxjs/Subscription';
import { DataStorageService } from './../../shared/data-storage.service';
import { Component } from '@angular/core';
import { Response } from '@angular/http';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html'
})
export class HeaderComponent {
    constructor(private dataStorageService: DataStorageService,
        private authService: AuthService,
        private router: Router,
        private route: ActivatedRoute) { }

    getAuthService() {
        return this.authService;
    }

    onSaveData() {
        this.dataStorageService.storeRecipes().
            subscribe((response: Response) => {
                console.log(response);
            })
    }
    onFetchData() {
        this.dataStorageService.getRecepies();
    }
    onLogout() {
        this.authService.logout();
        this.router.navigate(['..'], { relativeTo: this.route });
    }
}
