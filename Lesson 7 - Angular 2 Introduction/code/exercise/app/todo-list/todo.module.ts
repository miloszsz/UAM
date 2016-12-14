import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { TodoListComponent } from './todo-list.component';
import { TodoComponent } from './todo.component';
import { TodoService } from './todoList.service';

@NgModule({
    imports: [ CommonModule, HttpModule, FormsModule ],
    declarations: [ TodoListComponent, TodoComponent ],
    exports: [ TodoListComponent ],
    providers: [ TodoService ]
})
export class TodoModule {

} 