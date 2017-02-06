import {Component, OnInit, OnChanges} from '@angular/core';
import { EmitterService } from '../../emitter.service';
import {Channel} from "../../channel/model/channel";
@Component({
    selector:'channels-menu',
    template:`<h2> programm </h2>
               <h3> program 1 </h3>`

})

export class ProgramComponent implements OnInit,OnChanges{

    private channels:Array<any>;
    private channalsList: String;

    constructor(){

    }
    ngOnInit(){
        EmitterService.get("GET_CHANNELS").subscribe((channel:Channel[])=> {

        });
    }

    ngOnChanges(changes:any) {
        // EmitterService.get(this.channalsList).subscribe((channel:Comment[]) => { this.loadComments()});
    }

}