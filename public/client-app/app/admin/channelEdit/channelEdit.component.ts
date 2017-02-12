import {Component, OnInit} from '@angular/core'
import {ActivatedRoute, Params} from "@angular/router";
import {EmitterService} from "../../emitter.service";
import {Channel} from "../../models/channel";
import {AdminChannelService} from "../adminChannel.service";

@Component({
    templateUrl:'/client-app/app/admin/channelEdit/channelEdit.component.html'
})
export class ChannelEditComponent implements OnInit{

    private channel :Channel;
    constructor(private adminChannelService : AdminChannelService){

    }
    ngOnInit(){
        this.adminChannelService.channel$.subscribe((channel:Channel)=>
        {
            if(channel != null){
                this.channel = channel ;

            }else {
                console.log('error');
            }

        });

    }




}