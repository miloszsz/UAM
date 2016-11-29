class Task {
    private _text: string;
    private _isDone: boolean;

    markAsDone() : void {

    }

    getHtml() : HTMLElement {
        
    }
}

interface SearchTasks {
    search(query: string): Array<Task>;
}

class TaskList {
    private _element: HTMLElement;
    private _tasks: Array<Task>; 
    
    addTask(newTaskText: string) : Task {

    }

    removeTask(taskToRemove: Task) : void {

    }
}

