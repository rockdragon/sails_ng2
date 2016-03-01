import {bootstrap} from 'angular2/platform/browser'
import {provide} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_BINDINGS, ROUTER_PROVIDERS, LocationStrategy, PathLocationStrategy,
    HashLocationStrategy} from 'angular2/router';

import {AppComponent} from './components/app/AppComponent';
bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    CORE_DIRECTIVES,
    HTTP_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy})
]);