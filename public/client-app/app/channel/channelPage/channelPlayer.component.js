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
var channelPage_service_1 = require("./channelPage.service");
var platform_browser_1 = require("@angular/platform-browser");
var ChannelPlayerComponent = (function () {
    function ChannelPlayerComponent(channelPage, sanitizer) {
        this.channelPage = channelPage;
        this.sanitizer = sanitizer;
    }
    ChannelPlayerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.channelPage.getChannel(this.channelID).subscribe(function (channel) {
            console.log('sami');
            _this.url = _this.sanitizer.bypassSecurityTrustResourceUrl(channel.url);
            console.log(_this.url);
        }, function (err) { console.log(err); });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ChannelPlayerComponent.prototype, "channelID", void 0);
    ChannelPlayerComponent = __decorate([
        core_1.Component({
            selector: 'ng-player',
            template: "<div class=\"player-container\">\n                 <iframe class=\"player-video\" frameborder=\"0\" width=\"480\" height=\"270\"[src]=\"url\" allowfullscreen></iframe><br />\n              </div>     \n        ",
            styles: [".player-video {width:100%; height: 100%} .player-container{ height: 100%}"]
        }), 
        __metadata('design:paramtypes', [channelPage_service_1.ChannelPageService, platform_browser_1.DomSanitizer])
    ], ChannelPlayerComponent);
    return ChannelPlayerComponent;
}());
exports.ChannelPlayerComponent = ChannelPlayerComponent;
//# sourceMappingURL=channelPlayer.component.js.map