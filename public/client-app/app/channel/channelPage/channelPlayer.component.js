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
var ChannelPlayerComponent = (function () {
    function ChannelPlayerComponent(route) {
        this.route = route;
    }
    ChannelPlayerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { _this.name = params['name']; });
    };
    ChannelPlayerComponent = __decorate([
        core_1.Component({
            selector: 'ng-player',
            template: "<div class=\"player-container\">\n                 <iframe class=\"player-video\" frameborder=\"0\" width=\"480\" height=\"270\" src=\"//www.dailymotion.com/embed/video/xgz4t1\" allowfullscreen></iframe><br />\n              </div>     \n        ",
            styles: [".player-video {width:100%; height: 100%} .player-container{ height: 100%}"]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], ChannelPlayerComponent);
    return ChannelPlayerComponent;
}());
exports.ChannelPlayerComponent = ChannelPlayerComponent;
//# sourceMappingURL=channelPlayer.component.js.map