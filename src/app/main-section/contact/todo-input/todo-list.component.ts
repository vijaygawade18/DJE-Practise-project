import {Component} from 'angular2/core';
import {TodoService} from "./todo-service";
import {SearchPipe} from "../custom-pipe/custom-pipe.component";

@Component({
    selector: 'todo-list',
    pipes: [SearchPipe],
    template:`
        <ul>
            <li *ngFor="#todo of todoService.todos | search">
                {{todo.title}}
            </li>
        </ul>
    `
})

export class TodoList{
    message = "Hello !"
    constructor(public todoService: TodoService){}
}