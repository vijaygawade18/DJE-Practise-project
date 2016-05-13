import {Component} from 'angular2/core';
import {TranslatePipe}  from 'ng2-translate/ng2-translate';

@Component({
    selector: 'sd-sub1',
    moduleId: module.id,
    templateUrl: './sub1.component.html',
    styleUrls: ['./sub1.component.css'],
    pipes: [TranslatePipe]
})

export class Sub1 {}
