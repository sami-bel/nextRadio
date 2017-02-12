import {Component} from '@angular/core'
import {TempsFort} from "../../../../models/tempsFort";
import {ChannelEditService} from "../../services/channelEdit.service";
import {AdminChannelService} from "../../../adminChannel.service";
import {Router, ActivatedRoute} from "@angular/router";
import {Channel} from "../../../../models/channel";

@Component({
    templateUrl:'/client-app/app/admin/channelEdit/components/tempsFort/tempsFortList.component.html'
})
export class TempsFortListComponent  {

    private tempsFortList : TempsFort[];
    private channelId : any;
    private tempsFort : TempsFort;

    constructor(private channelEdit :ChannelEditService, private adminChannelService: AdminChannelService,
                private router:Router, private route : ActivatedRoute
    ){
    }

    ngOnInit(){

        this.adminChannelService.channel$.subscribe((channel:Channel)=>
        {
            if(channel != null){

                this.channelId = channel._id;
                this.channelEdit.getTempsFort(this.channelId).subscribe(
                    tempsFortsList =>{
                        this.tempsFortList = tempsFortsList;

                    } );

            }else {
                console.log('error');
            }

        });

    }
}