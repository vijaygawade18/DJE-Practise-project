import {Component, ViewEncapsulation} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {NavbarComponent} from './navbar/navbar.component';
import {AboutComponent} from './main-section/about/about.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {ContactComponent} from './main-section/contact/contact.component';
import {HomeComponent} from './main-section/home/home.component';
import {TranslatePipe,TranslateService}  from 'ng2-translate/ng2-translate';
import {ContactListComponent} from "./main-section/contact/contact-list/contact-list.component";


@Component({
  selector: 'sd-app',
  moduleId: module.id,
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES, NavbarComponent, ToolbarComponent],
  pipes: [TranslatePipe]
})
@RouteConfig([
  { path: '/', name: 'Home',  component: HomeComponent  },
  { path: '/about/...', name: 'About', component: AboutComponent },
  { path: '/contact/...', name: 'Contact', component: ContactComponent }
])
export class AppComponent {
  param: string = 'world';

  constructor(translate: TranslateService) {
   // translate.useStaticFilesLoader('assets/i18n', '.json');
    var userLang = navigator.language.split('-')[0]; // use navigator lang if available
    userLang = /(fr|en)/gi.test(userLang) ? userLang : 'en';

    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use(userLang);
  }
}
