import { Injectable } from '@angular/core';
import { TodoTask } from './todo.model';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService {

    constructor(private http: Http) {
    }

    getTodos () : Observable<TodoTask[]> {
        return this.http.get('app/todo-list/todoList.json')
            .map(this.extractData);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
  }
}