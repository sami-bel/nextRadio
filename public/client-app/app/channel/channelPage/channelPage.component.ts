import {Component, OnInit, OnChanges} from '@angular/core';
import {ChannelsService} from "../../menu/services/channels.service";
import {Channel} from "../model/channel";
import {EmitterService} from "../../emitter.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
    template:`<div class="row">
                    <div class="col-md-8">
                        <div class="player"> player</div>
                        <div class="highlights"> temps fort</div>
                    </div>
                    <div class="col-md-4">comment</div>
              </div>
             
        `
})

export class ChannelPageComponent implements OnInit{

    private name : string;

    constructor(private route: ActivatedRoute) {

    }
    ngOnInit(){
        this.route.params.subscribe(params => { this.name = params['name']});

    }

}