import {Component, OnInit, OnChanges} from '@angular/core';
import {ChannelsService} from "../../channelPage/menu/services/channels.service";
import {ChannelsListService} from '../../../shard/service/channelsList.service'
import {Channel} from "../../../models/channel";
import {EmitterService} from "../../../emitter.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    template:`<div class="container-fluid">
               
              
              <div  *ngFor="let channel of channels" class="card col-md-2" style="width: 20rem;">
                <img class="card-img-top" style="width:100%;"src="/images/tv/tv.png" alt="Card image cap">
                <div class="card-block">
                    <h4 class="card-title">{{channel.name}}</h4>
                    <p class="card-text"> Description </p>
                    <a (click)="onSelect(channel._id)" class="btn btn-primary"> Watch </a>
                </div>
              </div>
              </div>

 
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
    onSelect(id:string) {
        this.router.navigate(['/channel', id]);
    }
    ngOnChanges(){
        EmitterService.get(this.listChannelEvent).emit(this.channels)
    }
}