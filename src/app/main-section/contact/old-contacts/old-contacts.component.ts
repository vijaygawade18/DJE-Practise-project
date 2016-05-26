import {Component} from "angular2/core";
import {OnInit} from "angular2/core";
import {Contact} from "../contact";
import {ContactService} from "../contact-service";

@Component({
    selector:"old-contact",
    moduleId: module.id,
    templateUrl:"./old-contacts.html"
})

export class OldContact implements OnInit{
    //public contact = {}
public contacts: Contact[];

public selectedContact = {};

    constructor(private _contactService: ContactService){}
    onSelect(contact){
        this.selectedContact = contact;
    }
    getContacts(){
        this._contactService.getContacts().then((contacts: Contact[]) => this.contacts = contacts);
        console.log(this._contactService);
    }
    ngOnInit():any{
        this.getContacts();
    }
}