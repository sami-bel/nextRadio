/* * * ./app/comments/services/comment.service.ts * * */
// Imports
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Comment }  from '../model/comment';
import {Observable, Observer} from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

import * as io from 'socket.io-client';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CommentService {

  private commentsUrl = 'http://192.168.1.3:1337/api/comment/';
  private socketUrl = 'http://192.168.1.3:1337';
  private observable:Observable<Comment>
  private socket:SocketIOClient.Socket;

  constructor (private http: Http) {

  }

  getComments() : Observable<Comment[]> {

    // ...using get request
    let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options      = new RequestOptions({ headers: headers });
    return this.http.get(this.commentsUrl,options)
      .map((res:Response) => res.json())
      .catch((error:any)  => Observable.throw(error.json().error || 'Server error'));
  }

  getCommentAdded() : Observable<Comment>{
      return new Observable((observer:Observer<Comment>) =>
      {
          this.socket = io(this.socketUrl);
          this.socket.connect();
          this.socket.on('comment', (data:Comment) => { observer.next(data); });
          return () => { this.socket.disconnect(); };
      });
  }


  addComment (body: Object):Observable<Comment>{
    let bodyString   = JSON.stringify(body); // Stringify payload
    let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options      = new RequestOptions({ headers: headers }); // Create a request option
    return this.http.post(`${this.commentsUrl}create`,body, options)
        .map((res:Response) => res.json())
        .catch((error:any)  => Observable.throw(error.json().error || 'Server error no create'));
     }

  removeComment (id:string): Observable<Comment[]> {
    return this.http.delete(`${this.commentsUrl}/${id}`) // ...using put request
      .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error:any)  => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }



}
