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
var channels_service_1 = require("../services/channels.service");
var ProgramComponent = (function () {
    function ProgramComponent(channelsService) {
        this.channelsService = channelsService;
        this.programs = [];
    }
    ProgramComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.channelsService.getPrograms(this.channelID).subscribe(function (programs) {
            _this.programs = programs;
            console.log(programs);
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ProgramComponent.prototype, "channelID", void 0);
    ProgramComponent = __decorate([
        core_1.Component({
            selector: 'channels-program',
            templateUrl: "/client-app/app/channel/channelPage/menu/components/program.component.html"
        }), 
        __metadata('design:paramtypes', [channels_service_1.ChannelsService])
    ], ProgramComponent);
    return ProgramComponent;
}());
exports.ProgramComponent = ProgramComponent;
//# sourceMappingURL=program.component.js.map