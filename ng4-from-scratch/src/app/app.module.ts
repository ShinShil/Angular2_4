import { UsersModule } from './users/users.module';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component'
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent
    ],
    imports:[UsersModule, BrowserModule],
    providers: [],
    bootstrap:[AppComponent]
})
export class AppModule {
    
}