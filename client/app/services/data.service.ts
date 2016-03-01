import {Injectable} from 'angular2/core';
import {Http, Headers, HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx';

@Injectable()
export class DataService {
    constructor(private http:Http) {
        //console.log(http);
    }

    getPeople():Promise<any> {
        return new Promise((resolve, reject)=> {
            return this.http.get('/api/people')
                .map(res => res.json())
                .subscribe(
                    data => resolve(data),
                    err => reject(err),
                    () => console.log("Get Complete")
                );
        });
    }

    savePerson(name:string, age:number):Promise<any> {
        return new Promise((resolve, reject) => {
            var postData = `name=${name}&age=${age}`;
            var headers = new Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            return this.http.post('/api/people', postData, {headers: headers})
                .map(res => res.json())
                .subscribe(
                    data => resolve(data),
                    err => reject(err),
                    () => console.log('Save Complete')
                );
        });
    }
}