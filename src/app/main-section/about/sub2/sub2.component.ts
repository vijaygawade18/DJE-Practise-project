import {Component} from 'angular2/core';
import {TranslatePipe}  from 'ng2-translate/ng2-translate';

@Component({
    selector: 'about-sub2',
    moduleId: module.id,
    templateUrl: './sub2.component.html',
    styleUrls: ['./sub2.component.css'],
    pipes: [TranslatePipe]
})

export class Sub2 {}
