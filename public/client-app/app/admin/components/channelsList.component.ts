import{Component, OnInit} from '@angular/core'
import {AdminChannelService} from "../adminChannel.service";
import {Channel} from "../../models/channel";
import {ChannelsListService} from "../../shard/service/channelsList.service";
import {Router} from "@angular/router";
import {EmitterService} from "../../emitter.service";

@Component({
    selector: 'admin-channelList',
    templateUrl:'/client-app/app/admin/components/channelsList.component.html'
})
export class ChannelsListComponent implements OnInit{

    private channels : Array<Channel>
    constructor(private adminChannel: AdminChannelService, private channelsListService :ChannelsListService, private router :Router){

    }
    ngOnInit(){
        this.channelsListService.getChannelList().subscribe(
            channels => {
                this.channels = channels;
            }
        )
    }
    onSelect(channel:Channel){
        this.adminChannel.sendChannelToOtherComponent(channel);
        this.router.navigate(['/admin/editChannel']);
    }
}