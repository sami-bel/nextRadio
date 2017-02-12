import {Component, OnInit} from '@angular/core'
import {Program} from "../../../../models/program";
import {ChannelEditService} from "../../services/channelEdit.service";
import {AdminChannelService} from "../../../adminChannel.service";
import {Channel} from "../../../../models/channel";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
    templateUrl:'/client-app/app/admin/channelEdit/components/program/programsList.component.html'
})
export class ProgramsListComponent implements OnInit {

    private programs : Program[];
    private channelId : any;
    private channel : Channel;
    private id : any;

    constructor(private channelEdit :ChannelEditService, private adminChannelService: AdminChannelService,
                private router:Router, private route : ActivatedRoute
    ){
    }

    ngOnInit(){

        this.adminChannelService.channel$.subscribe((channel:Channel)=>
        {
            if(channel != null){
                this.channel = channel ;
                this.channelId = this.channel._id;
                this.channelEdit.getPrograms(this.channelId).subscribe(
                    programs =>{
                        this.programs = programs;
                        console.log(programs)
                    } );

            }else {
                console.log('error');
            }

        });

    }
    // newProgram(){
    //     console.log(' this id of programm list/'+this.channelId)
    //     this.router.navigate(['/admin/editChannel', this.channelId]);
    //
    // }
}