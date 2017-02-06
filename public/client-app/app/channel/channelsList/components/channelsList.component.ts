import {Component, OnInit, OnChanges} from '@angular/core';
import {ChannelsService} from "../../../menu/services/channels.service";
import {ChannelsListService} from "../service/channelsList.service";
import {Channel} from "../../model/channel";
import {EmitterService} from "../../../emitter.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    template:`<h1> List Channels</h1>
              <div *ngFor="let channel of channels"><a (click)="onSelect(channel.name)">{{channel.name}}</a></div>  
        `
})

export class ChannelsListComponent implements OnInit,OnChanges{

    private channels : Array<Channel>;
    private listChannelEvent: string;

    constructor(private channelService: ChannelsListService, private router:Router) {

    }
    ngOnInit(){

        this.channelService.getChannelList().subscribe(
            channels => {
                this.channels = channels;
                EmitterService.get(this.listChannelEvent).emit(this.channels)
            }
            );

    }
    onSelect(name:string) {
        this.router.navigate(['/channel', name]);
    }
    ngOnChanges(){
        EmitterService.get(this.listChannelEvent).emit(this.channels)
    }
}