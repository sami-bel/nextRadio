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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var comment_box_component_1 = require('./components/comment-box.component');
var comment_list_component_1 = require('./components/comment-list.component');
var comment_form_component_1 = require('./components/comment-form.component');
var index_1 = require('./components/index');
var commentaire_component_1 = require('./components/commentaire.component');
var comment_service_1 = require('./services/comment.service');
var Comment1Module = (function () {
    function Comment1Module() {
    }
    Comment1Module = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                http_1.JsonpModule,
            ],
            declarations: [
                comment_box_component_1.CommentBoxComponent,
                comment_form_component_1.CommentFormComponent,
                comment_list_component_1.CommentListComponent,
                index_1.CommentComponent,
                commentaire_component_1.CommentaireComponent
            ],
            providers: [
                comment_service_1.CommentService
            ],
            exports: [
                commentaire_component_1.CommentaireComponent,
                comment_box_component_1.CommentBoxComponent,
                comment_form_component_1.CommentFormComponent,
                comment_list_component_1.CommentListComponent,
                index_1.CommentComponent,
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], Comment1Module);
    return Comment1Module;
}());
exports.Comment1Module = Comment1Module;
//# sourceMappingURL=comment.module.js.map