import {Component} from '@angular/core'
import {TempsFort} from "../../../../models/tempsFort";
import {ChannelEditService} from "../../services/channelEdit.service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({

    templateUrl:'/client-app/app/admin/channelEdit/components/tempsFort/editTempsFort.component.html'
})
export class NewTempsFortComponent  {


    private tempsFort = new TempsFort() ;
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

    submitTempsFort(){
        this.channelEdit.addTempsFort(this.tempsFort, this.channelId).subscribe()
        this.router.navigate(['/admin/editChannel/tempsFortChannel']);
    }

    ngOnChanges(){

    }

}