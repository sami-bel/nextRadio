/* * * ./app/comments/services/comment.service.ts * * */
// Imports
import { Injectable }     from '@angular/core';
import * as apiRoute from '../../api-route';
import * as io from 'socket.io-client';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ChannelPageService {

    private socketUrl = apiRoute.route["baseUrl"];
    private socket:SocketIOClient.Socket;

    constructor () {
        this.socket = io(this.socketUrl);
        this.socket.connect();
    }
    // pour les socket

   }
