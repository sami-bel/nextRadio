import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable, Observer, BehaviorSubject} from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Channel} from "../models/channel";
@Injectable()
export class AdminChannelService{

    private channelUrl = '/api/channel/';

    public channelSource = new Subject<Channel>();
    public channelStream = this.channelSource.asObservable();
    public channel$ :any

    constructor (private http: Http) {
       this.channel$ = new BehaviorSubject<Channel>(null);


    }
    sendChannelToOtherComponent(channel:Channel){
        this.channel$.next(channel)
    }

    createChannel(body: Object):Observable<Channel>{
        let bodyString   = JSON.stringify(body); // Stringify payload
        let headers      = new Headers({ 'Content-Type': 'application/json' });
        let options      = new RequestOptions({ headers: headers });
        return this.http.post(`${this.channelUrl}create`,body, options)
            .map((res:Response) => res.json())
            .catch((error:any)  => Observable.throw(error.json().error || 'Server error at create channel'));
    }

    removeChannel (id:string): Observable<any> {
        return this.http.delete(`${this.channelUrl}/${id}`)
            .map((res:Response) => res.json())
            .catch((error:any)  => Observable.throw(error.json().error || 'Server error at delete channel')); //...errors if any
    }




}