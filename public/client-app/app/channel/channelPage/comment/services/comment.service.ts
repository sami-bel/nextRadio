/* * * ./app/comments/services/comment.service.ts * * */
// Imports
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Comment }  from '../../../../models/comment';
import {Observable, Observer} from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import * as apiRoute from '../../../../api-route';

import * as io from 'socket.io-client';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CommentService {

  private commentsUrl = '/api/comment/';
  private socketUrl = apiRoute.route["baseUrl"];
  private observable:Observable<Comment>
  private socket:SocketIOClient.Socket;

  constructor (private http: Http) {

  }

  getComments(id:any) : Observable<Comment[]> {

    let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options      = new RequestOptions({ headers: headers });
    return this.http.get(`${this.commentsUrl}all/${id}`,options)
      .map((res:Response) => res.json())
      .catch((error:any)  => Observable.throw(error.json().error || 'Server error'));
  }

  getCommentAdded(channelID:string) : Observable<Comment>{
      return new Observable((observer:Observer<Comment>) =>
      {
          this.socket = io(this.socketUrl);
          this.socket.connect();
          this.socket.emit('join-channel', { name : channelID})
          this.socket.on('comment', (data:Comment) => { observer.next(data); });
          return () => { this.socket.disconnect(); };
      });
  }


  addComment (body: Object, id:any):Observable<Comment>{
    let bodyString   = JSON.stringify(body); // Stringify payload
    let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options      = new RequestOptions({ headers: headers }); // Create a request option
    return this.http.post(`${this.commentsUrl}create/${id}`,body, options)
        .map((res:Response) => res.json())
        .catch((error:any)  => Observable.throw(error.json().error || 'Server error no create'));
     }

  removeComment (id:string): Observable<Comment[]> {
    return this.http.delete(`${this.commentsUrl}/${id}`) // ...using put request
      .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error:any)  => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }



}
