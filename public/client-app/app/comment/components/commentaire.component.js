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
var core_1 = require('@angular/core');
var comment_1 = require('../model/comment');
var comment_service_1 = require('../services/comment.service');
// Component decorator
var CommentaireComponent = (function () {
    function CommentaireComponent(commentService) {
        this.commentService = commentService;
        this.model = new comment_1.Comment('', '', new Date);
        this.comments = [];
    }
    CommentaireComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.commentService.getCommentAdded().subscribe(function (comment) {
            console.log('bravo');
            console.log(comment);
            _this.comments.push(comment);
        });
    };
    CommentaireComponent.prototype.sendMessage = function () {
        var _this = this;
        this.commentService.addComment(this.model).subscribe(function (comment) {
            _this.comment = new comment_1.Comment('', '', new Date);
            console.log(comment);
            console.log(_this.comments);
        }, function (err) {
            // Log errors if any
            console.log(err);
        });
    };
    CommentaireComponent = __decorate([
        core_1.Component({
            selector: 'commentaire-page',
            templateUrl: '/client-app/app/comment/components/commentaire.component.html'
        }), 
        __metadata('design:paramtypes', [comment_service_1.CommentService])
    ], CommentaireComponent);
    return CommentaireComponent;
}());
exports.CommentaireComponent = CommentaireComponent;
//# sourceMappingURL=commentaire.component.js.map