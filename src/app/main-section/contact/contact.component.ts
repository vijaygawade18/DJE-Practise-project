import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';


@Component({
    selector: 'sd-contact',
    moduleId: module.id,
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css'],
    directives:[CoursesComponent]
})
export class ContactComponent {

}
