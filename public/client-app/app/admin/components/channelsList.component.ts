import{Component, OnInit} from '@angular/core'
import {AdminChannelService} from "../adminChannel.service";
import {Channel} from "../../models/channel";
import {ChannelsListService} from "../../shard/service/channelsList.service";

@Component({
    selector: 'admin-channelList',
    templateUrl:'/client-app/app/admin/components/channelsList.component.html'
})
export class ChannelsListComponent implements OnInit{

    private channels : Array<Channel>
    constructor(private adminChannel: AdminChannelService, private channelsListService :ChannelsListService){

    }
    ngOnInit(){
        this.channelsListService.getChannelList().subscribe(
            channels => {
                this.channels = channels;
            }
        );
    }
}