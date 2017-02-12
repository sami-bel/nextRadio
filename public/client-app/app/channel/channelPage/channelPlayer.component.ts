import {Component, OnInit, OnChanges, Input, Sanitizer} from '@angular/core';
import {ChannelsService} from "./menu/services/channels.service";
import {Channel} from "../../models/channel";
import {EmitterService} from "../../emitter.service";
import {ActivatedRoute, Params} from "@angular/router";
import {ChannelPageService} from "./channelPage.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
    selector:'ng-player',
    template:`<div class="player-container">
                 <iframe class="player-video" frameborder="0" width="480" height="270"[src]="url" allowfullscreen></iframe><br />
              </div>     
        `,
    styles:[`.player-video {width:100%; height: 100%} .player-container{ height: 100%}`]
})

export class ChannelPlayerComponent implements OnInit{

    @Input() private channelID : string;

    private url: any;

    constructor(private channelPage : ChannelPageService, private sanitizer : DomSanitizer) {

    }

    ngOnInit(){

        this.channelPage.getChannel(this.channelID).subscribe(
            channel => {
                console.log('sami');
                this.url = this.sanitizer.bypassSecurityTrustResourceUrl(channel.url);
                console.log(this.url);
            },
            err => {console.log(err);}
        );
    }

}