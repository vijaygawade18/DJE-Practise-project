import {Component} from 'angular2/core';
import {TodoService} from "./todo-service";
import {TodoList} from "./todo-list.component";
import {TodoModel} from "./todo-model";

@Component({
    selector: 'todo-input',
    moduleId: module.id,
    templateUrl: './todo-input.html',
    directives: [TodoList]
})

export class TodoInput{
    todoModel: TodoModel = new TodoModel();
    constructor(public todoService: TodoService){}
    onClick(){
        this.todoService.todos.push(this.todoModel);
    }
}