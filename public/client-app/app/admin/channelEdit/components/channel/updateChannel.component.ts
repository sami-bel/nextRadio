import {Component, OnInit, Input} from '@angular/core'
import {Channel} from "../../../../models/channel";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {ChannelEditService} from "../../services/channelEdit.service";
import {AdminChannelService} from "../../../adminChannel.service";

@Component({
    selector: 'ng-updateChannel',
    templateUrl:'/client-app/app/admin/channelEdit/components/channel/updateChannel.component.html'
})
export class UpdateChannelComponent implements OnInit {

    @Input() private channel : Channel;
    private update = false;

    constructor(private adminChannelService: AdminChannelService,private channelEdit: ChannelEditService, private route :ActivatedRoute){}

    ngOnInit(){
        console.log(this.channel)
    }

    updateChannel(){

        this.adminChannelService.channel$.subscribe((channel:Channel)=>
        {
            if(channel != null){
                console.log('bravo '+ channel)
                this.channel = channel ;

            }else {
                console.log('error');
            }

        });
        this.channelEdit.UpdateChannel(this.channel,this.channel._id).subscribe(
            channel => {
                // this.channels.push(channel);

            });
        this.update = true;
    }

}