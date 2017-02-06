// Imports
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable, Observer} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TempsFortService {

    private channelsUrl = 'http://192.168.1.3:1337/api/channel/all';

    constructor (private http: Http) {

    }
}