import {Injectable} from "angular2/core";
import {CONTACTS} from "./mock-contact";
import {Contact} from "./contact";

@Injectable()
export class ContactService{
    getContacts(){
        //return new Promise((resolve,reject)=>{
        //    resolve(CONTACTS);
        //});
        return Promise.resolve(CONTACTS);
    }
    insertContact(contact: Contact){
       return Promise.resolve(CONTACTS).then((contacts: Contact[]) => contacts.push(contact));
    }
}