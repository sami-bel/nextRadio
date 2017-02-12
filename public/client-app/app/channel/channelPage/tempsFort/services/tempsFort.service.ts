// Imports
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable, Observer} from 'rxjs/Rx';
import * as apiRoute from '../../../../api-route';

import * as io from 'socket.io-client';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {TempsFort} from "../../../../models/tempsFort";

@Injectable()
export class TempsFortService {

    private tempsFortUrl = 'http://localhost:1337/api/tempsFort/';

    private socketUrl = apiRoute.route["baseUrl"];
    private socket:SocketIOClient.Socket;

    constructor (private http: Http) {

    }

    getTempsFort(id:any) : Observable<TempsFort[]> {

        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options      = new RequestOptions({ headers: headers });
        return this.http.get(`${this.tempsFortUrl}all/${id}`,options)
            .map((res:Response) => res.json())
            .catch((error:any)  => Observable.throw(error.json().error || 'Server error'));
    }
    getTempsFortAdded(channelID:string) : Observable<TempsFort>{
        return new Observable((observer:Observer<TempsFort>) =>
        {
            this.socket = io(this.socketUrl);
            this.socket.connect();
            this.socket.emit('join-channel', { name : channelID})
            this.socket.on('temps-fort', (data:TempsFort) => { observer.next(data); });
            return () => { this.socket.disconnect(); };
        });
    }
}