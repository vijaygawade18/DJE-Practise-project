import {Component} from 'angular2/core';
import {ContactService} from "./contact-service";
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {NewContact} from "./new-contacts/new-contacts.component";
import {OldContact} from "./old-contacts/old-contacts.component";
import {TranslatePipe}  from 'ng2-translate/ng2-translate';
import {TodoInput} from "./todo-input/todo-input.component";


@Component({
    selector: 'sd-contact',
    moduleId: module.id,
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css'],
    providers: [ContactService],
    directives: [ROUTER_DIRECTIVES],
    pipes: [TranslatePipe]
    //inputs: ["contact"]
})

@RouteConfig([
    {path: '/OldContact', name: 'OldContact', component:OldContact, useAsDefault: true},
    {path: '/NewContact', name: 'NewContact', component:NewContact},
    {path: '/TodoInput', name: 'Todo', component: TodoInput}
])

export class ContactComponent{

}
