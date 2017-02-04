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
/* * * ./app/comments/components/comment-list.component.ts * * */
// Imports
var core_1 = require('@angular/core');
var comment_service_1 = require('../services/comment.service');
var emitter_service_1 = require('../../emitter.service');
// Component decorator
var CommentListComponent = (function () {
    // Constructor with injected service
    function CommentListComponent(commentService) {
        this.commentService = commentService;
    }
    CommentListComponent.prototype.ngOnInit = function () {
        // Load comments
        this.loadComments();
    };
    CommentListComponent.prototype.loadComments = function () {
        var _this = this;
        // Get all comments
        this.commentService.getComments()
            .subscribe(function (comments) { return _this.comments = comments; }, //Bind to view
        function (//Bind to view
            err) {
            // Log errors if any
            console.log(err);
        });
    };
    CommentListComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        // Listen to the 'list'emitted event so as populate the model
        // with the event payload
        emitter_service_1.EmitterService.get(this.listId).subscribe(function (comments) { _this.loadComments(); });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CommentListComponent.prototype, "listId", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CommentListComponent.prototype, "editId", void 0);
    CommentListComponent = __decorate([
        core_1.Component({
            selector: 'comment-list',
            template: "\n        <comment-box \n        [editId]=\"editId\" \n        [listId]=\"listId\" \n        *ngFor=\"let comment of comments\" \n        [comment]=\"comment\">\n    </comment-box>\n    "
        }), 
        __metadata('design:paramtypes', [comment_service_1.CommentService])
    ], CommentListComponent);
    return CommentListComponent;
}());
exports.CommentListComponent = CommentListComponent;
//# sourceMappingURL=comment-list.component.js.map