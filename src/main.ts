import {provide, enableProdMode} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, APP_BASE_HREF} from 'angular2/router';
//import {TranslateService, TranslateLoader, TranslateStaticLoader} from 'ng2-translate/ng2-translate';
import {TRANSLATE_PROVIDERS,TranslateService} from 'ng2-translate/ng2-translate';

import {AppComponent} from './app/app.component';
import {HTTP_PROVIDERS} from 'angular2/http';
import {TodoService} from "./app/main-section/contact/todo-input/todo-service";

if ('<%= ENV %>' === 'prod') { enableProdMode(); }

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  provide(APP_BASE_HREF, { useValue: '<%= APP_BASE %>' }),
  HTTP_PROVIDERS,
  TRANSLATE_PROVIDERS,
  // not required if you use TranslateStaticLoader (default)
  // use this if you want to use another loader
 // provide(TranslateLoader, {useClass: TranslateStaticLoader}),
  // not required, but recommended to have 1 unique instance of your service
  TranslateService,
  TodoService
]);

// In order to start the Service Worker located at "./sw.js"
// uncomment this line. More about Service Workers here
// https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers
// if ('serviceWorker' in navigator) {
//   (<any>navigator).serviceWorker.register('./sw.js').then(function(registration) {
//     console.log('ServiceWorker registration successful with scope: ',    registration.scope);
//   }).catch(function(err) {
//     console.log('ServiceWorker registration failed: ', err);
//   });
// }
