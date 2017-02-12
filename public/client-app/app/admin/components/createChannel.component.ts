import{Component, OnInit} from '@angular/core'
import {AdminChannelService} from "../adminChannel.service";
import {Channel} from "../../models/channel";
import {Router} from "@angular/router";

@Component({
    selector: 'ng-createChannel',
    templateUrl:'/client-app/app/admin/components/createChannel.component.html'
})
export class CreateChannelComponent {

    private channels = new Array<Channel>();
    private channel = new Channel();

    constructor(private adminChannel: AdminChannelService, private router :Router){}


    createChannel(){
        this.adminChannel.createChannel(this.channel).subscribe(
            channel => {
            this.channels.push(channel);

        });
        this.router.navigate(['/admin']);
    }
}