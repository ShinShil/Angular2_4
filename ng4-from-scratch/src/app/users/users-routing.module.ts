import { UsersComponent } from './users.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports:[
        RouterModule.forChild([{path: '', component: UsersComponent}])
    ],
    exports: [
        RouterModule
    ]
})
export class UsersRoutingModule {
    
}