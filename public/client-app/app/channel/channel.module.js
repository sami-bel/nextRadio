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
var channel_routing_module_1 = require('./channel-routing.module');
var channelPlayer_component_1 = require('./channelPage/channelPlayer.component');
var channelsList_component_1 = require('./channelsList/components/channelsList.component');
var channelPage_component_1 = require('./channelPage/channelPage.component');
var channelsList_service_1 = require('./channelsList/service/channelsList.service');
var comment_module_1 = require('./channelPage/comment/comment.module');
var menu_module_1 = require('./channelPage/menu/menu.module');
var tempsFort_modul_1 = require('./channelPage/tempsFort/tempsFort.modul');
var channelPage_service_1 = require("./channelPage/channelPage.service");
var ChannelModule = (function () {
    function ChannelModule() {
    }
    ChannelModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                menu_module_1.MenuModule,
                comment_module_1.CommentModule,
                channel_routing_module_1.ChannelRoutingModule,
                tempsFort_modul_1.TempsFortModule
            ],
            declarations: [
                channelsList_component_1.ChannelsListComponent,
                channelPage_component_1.ChannelPageComponent, channelPlayer_component_1.ChannelPlayerComponent
            ],
            providers: [
                channelsList_service_1.ChannelsListService, channelPage_service_1.ChannelPageService
            ],
            exports: [
                channelsList_component_1.ChannelsListComponent,
                channelPage_component_1.ChannelPageComponent, channelPlayer_component_1.ChannelPlayerComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ChannelModule);
    return ChannelModule;
}());
exports.ChannelModule = ChannelModule;
//# sourceMappingURL=channel.module.js.map