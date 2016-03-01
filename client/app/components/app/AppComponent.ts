import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES, Location} from 'angular2/router';

import {HomeComponent} from '../home/HomeComponent';
import {DataComponent} from '../data/DataComponent';

@RouteConfig([
    {path: '/home', component: HomeComponent, as: 'Home'},
    {path: '/data', component: DataComponent, as: 'Data'},
])
@Component({
    selector: 'my-app',
    templateUrl: 'app/htmls/app.html',
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
    constructor(location: Location) {
        location.go('/home');
    }

    activeByHash (expected){
        return window.location.hash === expected;
    };
}