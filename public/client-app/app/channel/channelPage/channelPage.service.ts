/* * * ./app/comments/services/comment.service.ts * * */
// Imports
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import {Observable, Observer} from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';


import * as io from 'socket.io-client';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Channel} from "../../models/channel";

@Injectable()
export class ChannelPageService {

  private channelUrl = '/api/channel/';


  constructor (private http: Http) {
  }

    getChannel(id:any) : Observable<Channel> {

        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options      = new RequestOptions({ headers: headers });
        return this.http.get(`${this.channelUrl}/${id}`,options)
            .map((res:Response) => res.json())
            .catch((error:any)  => Observable.throw(error.json().error || 'Server error'));
    }


}
