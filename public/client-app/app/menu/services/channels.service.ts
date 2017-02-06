import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable, Observer} from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

import * as io from 'socket.io-client';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ChannelsService {

    private commentsUrl = 'http://localhost:1337/api/comment/';
    private socketUrl = 'http://localhost:1337';
    private observable:Observable<Comment>
    private socket:SocketIOClient.Socket;

    constructor (private http: Http) {

    }
}