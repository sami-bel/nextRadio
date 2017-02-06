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
var channelsList_service_1 = require("../service/channelsList.service");
var emitter_service_1 = require("../../../emitter.service");
var router_1 = require("@angular/router");
var ChannelsListComponent = (function () {
    function ChannelsListComponent(channelService, router) {
        this.channelService = channelService;
        this.router = router;
    }
    ChannelsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.channelService.getChannelList().subscribe(function (channels) {
            _this.channels = channels;
            emitter_service_1.EmitterService.get(_this.listChannelEvent).emit(_this.channels);
        });
    };
    ChannelsListComponent.prototype.onSelect = function (name) {
        this.router.navigate(['/channel', name]);
    };
    ChannelsListComponent.prototype.ngOnChanges = function () {
        emitter_service_1.EmitterService.get(this.listChannelEvent).emit(this.channels);
    };
    ChannelsListComponent = __decorate([
        core_1.Component({
            template: "<h1> List Channels</h1>\n              <div *ngFor=\"let channel of channels\"><a (click)=\"onSelect(channel.name)\">{{channel.name}}</a></div>  \n        "
        }), 
        __metadata('design:paramtypes', [channelsList_service_1.ChannelsListService, router_1.Router])
    ], ChannelsListComponent);
    return ChannelsListComponent;
}());
exports.ChannelsListComponent = ChannelsListComponent;
//# sourceMappingURL=channelsList.component.js.map