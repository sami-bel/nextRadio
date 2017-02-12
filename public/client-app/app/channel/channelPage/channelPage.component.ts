import {Component, OnInit, OnChanges} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {ChannelPageService} from "./channelPage.service";

@Component({
    template:`<div class="row">
                    <div class="col-md-3 menu card"> <ng-menu [channelID]="channelID"></ng-menu></div>
                    <div class="col-md-6">
                        <div class="player "> <ng-player [channelID]="channelID"></ng-player> </div>
                        <div class="temps-fort"> <ng-tempsFort [channelID]="channelID"></ng-tempsFort></div>
                    </div>
                    <div class="col-md-3 comment"><ng-comment [channelID]="channelID"></ng-comment></div>
              </div>
             
        `,
    styleUrls:['client-app/app/channel/channelPage/channelPage.component.css']
})

export class ChannelPageComponent implements OnInit{

    private channelID : string;

    constructor(private route: ActivatedRoute, private channelPageService: ChannelPageService) {

    }
    ngOnInit(){
        this.route.params.subscribe(params => {
            this.channelID = params['id'];
            // this.channelPageService.joinChannel(this.name);
        });
    }

}