import {Component, OnInit, OnChanges} from '@angular/core';
import {ChannelsService} from "../../../menu/services/channels.service";
import {Channel} from "../../model/channel";
import {EmitterService} from "../../../emitter.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
    selector:'ng-player',
    template:`<div class="player-container">
                 <iframe class="player-video" frameborder="0" width="480" height="270" src="//www.dailymotion.com/embed/video/xgz4t1" allowfullscreen></iframe><br />
              </div>     
        `,
    styles:[`.player-video {width:100%; height: 100%} .player-container{ height: 100%}`]
})

export class ChannelPlayerComponent implements OnInit{

    private name : string;

    constructor(private route: ActivatedRoute) {

    }
    ngOnInit(){
        this.route.params.subscribe(params => { this.name = params['name']});

    }

}