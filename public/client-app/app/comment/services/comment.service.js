"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* * * ./app/comments/services/comment.service.ts * * */
// Imports
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
var io = require('socket.io-client');
// Import RxJs required methods
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var CommentService = (function () {
    function CommentService(http) {
        this.http = http;
        this.commentsUrl = 'http://localhost:1337/api/comment/';
        this.socketUrl = 'http://localhost:1337';
    }
    CommentService.prototype.getComments = function () {
        // ...using get request
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(this.commentsUrl, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    CommentService.prototype.getCommentAdded = function () {
        var _this = this;
        return new Rx_1.Observable(function (observer) {
            _this.socket = io(_this.socketUrl);
            _this.socket.connect();
            _this.socket.on('comment', function (data) { observer.next(data); });
            return function () { _this.socket.disconnect(); };
        });
    };
    // addComment (body: Object): Observable<Comment[]> {
    CommentService.prototype.addComment = function (body) {
        var bodyString = JSON.stringify(body); // Stringify payload
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new http_1.RequestOptions({ headers: headers }); // Create a request option
        return this.http.post(this.commentsUrl + "create", body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error no create'); });
        // return this.http.post(`${this.commentsUrl}create`,body, options) // ...using post request
        //   .map((res:Response) => {res.json(); console.log( res.json())}) // ...and calling .json() on the response to return data
        //   .catch((error:any)  => Observable.throw(error.json().error || 'Server error no create')); //...errors if any
    };
    CommentService.prototype.updateComment = function (body) {
        var bodyString = JSON.stringify(body); // Stringify payload
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new http_1.RequestOptions({ headers: headers }); // Create a request option
        return this.http.put(this.commentsUrl + "/" + body['id'], body, options) // ...using put request
            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); }); //...errors if any
    };
    // Delete a comment
    CommentService.prototype.removeComment = function (id) {
        return this.http.delete(this.commentsUrl + "/" + id) // ...using put request
            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); }); //...errors if any
    };
    CommentService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CommentService);
    return CommentService;
}());
exports.CommentService = CommentService;
//# sourceMappingURL=comment.service.js.map