import { Component, OnInit } from '@angular/core'; 
import { TodoTask } from './todo.model';
import { TodoService } from './todoList.service';

@Component({
    selector: 'my-todo-list',
    templateUrl: 'app/todo-list/todo-list.component.html'
})
export class TodoListComponent implements OnInit {

    public todos:Array<TodoTask> = [];

    public newTodoTaskName: string;

    constructor(private todoService: TodoService) {

    }

    addNewTask () {
        let newTask: TodoTask = {
            name: this.newTodoTaskName,
            isDone: false
        };

        this.todos.push(newTask);
    }

    ngOnInit () {
        this.todoService.getTodos().subscribe(
            data => this.todos = data
        );
    }

    removeChild (taskToRemove: TodoTask) {
        let index: number = this.todos.indexOf(taskToRemove);
        this.todos.splice(index, 1);
    }
} 