// Imports
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable, Observer} from 'rxjs/Rx';
import * as apiRoute from '../../../api-route';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Channel} from "../../model/channel";

@Injectable()
export class ChannelsListService {

    // private channelsUrl = 'http://192.168.1.3:1337/api/channel/all';
    private channelsUrl = '/api/channel/all';



    constructor (private http: Http) {

    }

    getChannelList():Observable<Channel[]>{

        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options      = new RequestOptions({ headers: headers });
        return this.http.get(this.channelsUrl,options)
            .map((res:Response) => res.json())
            .catch((error:any)  => Observable.throw(error.json().error || 'Server error'));
    }
}