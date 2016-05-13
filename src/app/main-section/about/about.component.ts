import {Component} from 'angular2/core';
import {TranslatePipe}  from 'ng2-translate/ng2-translate';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Sub2} from './sub2/sub2.component';
import {Sub1} from './sub1/sub1.component';


@Component({
  selector: 'sd-about',
  moduleId: module.id,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  directives: [ROUTER_DIRECTIVES],
  pipes: [TranslatePipe]
})

@RouteConfig([
  {path: '/sub1', name: 'Sub1', component:Sub1, useAsDefault: true},
  {path: '/sub2', name: 'Sub2', component:Sub2}
])

export class AboutComponent {}
