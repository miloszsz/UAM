
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { TodoModule } from './todo-list/todo.module';

@NgModule({
    imports: [ 
        BrowserModule, 
        TodoModule
    ],
    declarations: [ AppComponent, HeaderComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }