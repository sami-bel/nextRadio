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
import {Program} from "../../../models/program";
import {Channel} from "../../../models/channel";

@Injectable()
export class ChannelEditService {

  private channelUrl = 'http://localhost:1337/api/channel/';
  private programUrl = 'http://localhost:1337/api/program/';
  private tempsFortUrl = 'http://localhost:1337/api/tempsFort/';
  private socketUrl = 'http://localhost:1337';
  private socket:SocketIOClient.Socket;

  constructor (private http: Http) {

  }
  addProgram(body: Object, id:any) : Observable<Program[]> {

    // ...using get request
     let headers      = new Headers({ 'Content-Type': 'application/json' });
     let options      = new RequestOptions({ headers: headers });
     return this.http.post(`${this.programUrl}create/${id}`,body,options)
        .map((res:Response) => res.json())
        .catch((error:any)  => Observable.throw(error.json().error || 'Server error on add program'));
  }

  UpdateProgram(body: Object, id: any ):Observable<Channel>{

    let bodyString   = JSON.stringify(body);
    let headers      = new Headers({ 'Content-Type': 'application/json' });
    let options      = new RequestOptions({ headers: headers });
    return this.http.post(`${this.programUrl}update/${id}`,body, options)
        .map((res:Response) => res.json())
        .catch((error:any)  => Observable.throw(error.json().error || 'Server error at create channel'));
  }

  getPrograms(id:any) : Observable<Program[]> {

    let headers      = new Headers({ 'Content-Type': 'application/json' });
    let options      = new RequestOptions({ headers: headers });
    return this.http.get(`${this.programUrl}/all/${id}`,options)
        .map((res:Response) => res.json())
        .catch((error:any)  => Observable.throw(error.json().error || 'Server error on get programs'));
  }

    UpdateChannel(body: Object, id: any ):Observable<Channel>{

        let bodyString   = JSON.stringify(body);
        let headers      = new Headers({ 'Content-Type': 'application/json' });
        let options      = new RequestOptions({ headers: headers });
        return this.http.post(`${this.channelUrl}update/${id}`,body, options)
            .map((res:Response) => res.json())
            .catch((error:any)  => Observable.throw(error.json().error || 'Server error at create channel'));
    }

    addTempsFort(body:Object, id :any){
        let headers      = new Headers({ 'Content-Type': 'application/json' });
        let options      = new RequestOptions({ headers: headers });
        return this.http.post(`${this.tempsFortUrl}create/${id}`,body,options)
            .map((res:Response) => res.json())
            .catch((error:any)  => Observable.throw(error.json().error || 'Server error on at create channel'));
    }


    getTempsFort(id:any) : Observable<Program[]> {

        let headers      = new Headers({ 'Content-Type': 'application/json' });
        let options      = new RequestOptions({ headers: headers });
        return this.http.get(`${this.tempsFortUrl}/all/${id}`,options)
            .map((res:Response) => res.json())
            .catch((error:any)  => Observable.throw(error.json().error || 'Server error on get programs'));
    }
  }
