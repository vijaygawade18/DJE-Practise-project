import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'sd-sidebar',
  moduleId: module.id,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class SidebarComponent {}
