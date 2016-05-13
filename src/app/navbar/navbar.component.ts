import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
//import {TranslatePipe,TranslateService}  from 'ng2-translate/ng2-translate';
import {TranslatePipe}  from 'ng2-translate/ng2-translate';



@Component({
  selector: 'sd-navbar',
  moduleId: module.id,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  directives: [ROUTER_DIRECTIVES],
  pipes: [TranslatePipe]
})

export class NavbarComponent {}
