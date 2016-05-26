import {Component} from "angular2/core";
import {ContactComponent} from "../contact.component";
import {ContactService} from "../contact-service";
import {Contact} from "../contact";
import {Router} from "angular2/router";

@Component({
    selector:'new-contact',
    moduleId: module.id,
    templateUrl:"./new-contacts.html"
})

export class NewContact{
    constructor(private _contactService: ContactService, private _router: Router){}

    onAddContact(firstName, lastName, phone, email){
       let contact: Contact = {firstName:firstName,lastName:lastName,phone:phone,email:email};
        this._contactService.insertContact(contact);
        this._router.navigate(['/Contact']);
    }
}
