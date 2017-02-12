import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable, Observer} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Program} from "../../../../models/program";

@Injectable()
export class ChannelsService {

    private programUrl = 'http://localhost:1337/api/program/';

    constructor (private http: Http) {

    }

    getPrograms(id:any) : Observable<Program[]> {

        let headers      = new Headers({ 'Content-Type': 'application/json' });
        let options      = new RequestOptions({ headers: headers });
        return this.http.get(`${this.programUrl}/all/${id}`,options)
            .map((res:Response) => res.json())
            .catch((error:any)  => Observable.throw(error.json().error || 'Server error on get programs'));
    }
}