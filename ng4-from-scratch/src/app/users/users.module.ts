import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [UsersComponent],
    imports:[CommonModule, UsersRoutingModule],
    exports: [ ]
})
export class UsersModule {
    
}