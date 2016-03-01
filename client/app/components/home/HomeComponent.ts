import {Component, OnInit} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import {DataService} from '../../services/data.service';
import {Person} from '../../models/Person';
import {ROUTER_DIRECTIVES, Location} from 'angular2/router';

@Component({
    selector: 'home',
    templateUrl: 'app/htmls/home.html',
    providers: [DataService],
    directives: [ROUTER_DIRECTIVES]
})
export class HomeComponent implements OnInit {

    constructor(private dataService: DataService,
                private location: Location) { }

    model = new Person("", 0);

    ngOnInit() { }

    onSubmit() {
        this.dataService.savePerson(this.model.name, this.model.age)
            .then(_ => window.location.href ='/#/data')
            .catch(err=>console.log(err));
    }
}