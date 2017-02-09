import{Component, OnInit} from '@angular/core'
import {AdminChannelService} from "../adminChannel.service";
import {Channel} from "../../models/channel";

@Component({
    selector: 'ng-createChannel',
    templateUrl:'/client-app/app/admin/components/createChannel.component.html'
})
export class CreateChannelComponent implements OnInit{

    private channels : Array<Channel>
    constructor(private adminChannel: AdminChannelService){

    }
    ngOnInit(){

    }

    createChannel(channel : Channel){
        this.adminChannel.addChannel(channel).subscribe(
            channel => {
            console.log(channel);
            this.channels.push(channel);

        })
    }
}