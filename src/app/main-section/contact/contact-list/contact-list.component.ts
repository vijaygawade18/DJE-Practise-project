import {Component, OnInit} from 'angular2/core';
import {ContactComponent} from "../contact.component";

@Component({
    selector: 'contact-list',
    moduleId: module.id,
    templateUrl: './contact-list/contact-list.html',
    styleUrls: ['./contact.component.css'],
    directives: [ContactComponent]
})
export class ContactListComponent {

    public selectedContact = {};
    onSelect(contact){
        this.selectedContact = contact;
    }
}
