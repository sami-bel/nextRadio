import {Component, OnInit, OnChanges, Input} from '@angular/core';
import {Channel} from "../../../../models/channel";
import {EmitterService} from "../../../../emitter.service";
import {ChannelsService} from "../services/channels.service";
import {Program} from "../../../../models/program";
@Component({
    selector:'channels-program',
    templateUrl:`/client-app/app/channel/channelPage/menu/components/program.component.html`

})

export class ProgramComponent implements OnInit{

    private programs:Program[] =[];
    @Input() channelID :string;

    constructor(private channelsService:ChannelsService){

    }
    ngOnInit(){
        this.channelsService.getPrograms(this.channelID).subscribe(
            programs =>{
                this.programs = programs;
                console.log(programs)
            } );

    }



}