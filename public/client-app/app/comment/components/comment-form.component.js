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
var comment_service_1 = require('../services/comment.service');
var emitter_service_1 = require('../../emitter.service');
var comment_1 = require('../../models/comment');
// Component decorator
var CommentFormComponent = (function () {
    // Constructor with injected service
    function CommentFormComponent(commentService) {
        this.commentService = commentService;
        // Local properties
        this.model = new comment_1.Comment('', '');
        this.editing = false;
    }
    CommentFormComponent.prototype.submitComment = function () {
        var _this = this;
        // Variable to hold a reference of addComment/updateComment
        var commentOperation;
        if (!this.editing) {
        }
        else {
        }
        // Subscribe to observable
        commentOperation.subscribe(function (comments) {
            // Emit list event
            emitter_service_1.EmitterService.get(_this.listId).emit(comments);
            // Empty model
            _this.model = new comment_1.Comment('', '');
            // Switch editing status
            if (_this.editing)
                _this.editing = !_this.editing;
        }, function (err) {
            // Log errors if any
            console.log(err);
        });
    };
    CommentFormComponent.prototype.ngOnChanges = function () {
        var _this = this;
        // Listen to the 'edit'emitted event so as populate the model
        // with the event payload
        emitter_service_1.EmitterService.get(this.editId).subscribe(function (comment) {
            _this.model = comment;
            _this.editing = true;
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CommentFormComponent.prototype, "editId", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CommentFormComponent.prototype, "listId", void 0);
    CommentFormComponent = __decorate([
        core_1.Component({
            selector: 'comment-form',
            template: "<form (ngSubmit)=\"submitComment()\">\n              <div class=\"form-group\">\n                  <div class=\"input-group\">\n                      <span class=\"input-group-addon\" id=\"basic-addon1\"><span class=\"glyphicon glyphicon-user\"></span></span>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Author\" [(ngModel)]=\"model.author\" name=\"author\">\n                  </div>\n                  <br />\n                  <textarea class=\"form-control\" rows=\"3\" placeholder=\"Text\" [(ngModel)]=\"model.text\" name=\"text\"></textarea>\n                  <br />\n                  <button *ngIf=\"!editing\" type=\"submit\" class=\"btn btn-primary btn-block\">Add</button>\n                  <button *ngIf=\"editing\" type=\"submit\" class=\"btn btn-warning btn-block\">Update</button>\n              </div>\n           </form>    "
        }), 
        __metadata('design:paramtypes', [comment_service_1.CommentService])
    ], CommentFormComponent);
    return CommentFormComponent;
}());
exports.CommentFormComponent = CommentFormComponent;
//# sourceMappingURL=comment-form.component.js.map