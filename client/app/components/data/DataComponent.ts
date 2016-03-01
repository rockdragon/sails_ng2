import {Component, OnInit} from 'angular2/core';
import {DataService} from '../../services/data.service';
import {Person} from '../../models/Person';

@Component({
    selector: 'about',
    templateUrl: 'app/htmls/data.html',
    providers: [DataService]
})

export class DataComponent implements OnInit {

    constructor(private dataService: DataService) {
    }

    model: Person[] = [];

    ngOnInit() {
        this.dataService.getPeople()
            .then(people => this.model = people)
            .catch(err => console.log(err));
    }
}