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
var router_1 = require("@angular/router");
var ChannelPageComponent = (function () {
    function ChannelPageComponent(route) {
        this.route = route;
    }
    ChannelPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { _this.name = params['name']; });
    };
    ChannelPageComponent = __decorate([
        core_1.Component({
            template: "<div class=\"row\">\n                    <div class=\"col-md-8\">\n                        <div class=\"player \"> <ng-player></ng-player> </div>\n                        <div class=\"highlights\"> temps fort</div>\n                    </div>\n                    <div class=\"col-md-4 comment\"><ng-comment></ng-comment></div>\n              </div>\n             \n        ",
            styleUrls: ['client-app/app/channel/channelPage/components/channelPage.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], ChannelPageComponent);
    return ChannelPageComponent;
}());
exports.ChannelPageComponent = ChannelPageComponent;
//# sourceMappingURL=channelPage.component.js.map