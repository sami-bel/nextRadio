import {Component, OnInit, OnChanges} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {ChannelPageService} from "./channelPage.service";

@Component({
    template:`<div class="row">
                    <div class="col-md-3 menu"> <ng-menu></ng-menu></div>
                    <div class="col-md-6">
                        <div class="player "> <ng-player></ng-player> </div>
                        <div class="temps-fort"> <ng-tempsFort></ng-tempsFort></div>
                    </div>
                    <div class="col-md-3 comment"><ng-comment [channelName]="name"></ng-comment></div>
              </div>
             
        `,
    styleUrls:['client-app/app/channel/channelPage/channelPage.component.css']
})

export class ChannelPageComponent implements OnInit{

    private name : string;

    constructor(private route: ActivatedRoute, private channelPageService: ChannelPageService) {

    }
    ngOnInit(){
        this.route.params.subscribe(params => {
            this.name = params['name'];
            console.log('this channel ', this.name)
            // this.channelPageService.joinChannel(this.name);
        });
    }

}