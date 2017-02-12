import {Component, OnInit, OnChanges} from '@angular/core'
import {Program} from "../../../../models/program";
import {ChannelEditService} from "../../services/channelEdit.service";
import {EmitterService} from "../../../../emitter.service";
import {Router, ActivatedRoute, Params} from "@angular/router";


@Component({
      templateUrl:'/client-app/app/admin/channelEdit/components/program/editProgram.component.html'
})
export class NewProgramComponent implements OnInit, OnChanges{

    private program = new Program() ;
    private channelId :string;
    private editing = false;

    constructor(
        private channelEdit : ChannelEditService,
        private router: Router,
        private route: ActivatedRoute){

    }
    ngOnInit(){

        this.route.params.subscribe(params => {
            this.channelId = params['id'];
        });

    }

    submitProgram(){
        this.channelEdit.addProgram(this.program, this.channelId).subscribe()
        this.router.navigate(['/admin/editChannel']);
    }

    ngOnChanges(){

    }

}