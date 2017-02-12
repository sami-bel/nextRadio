import {Component, OnInit, OnChanges, Input} from '@angular/core';

import {ActivatedRoute, Params} from "@angular/router";
import {TempsFortService} from "../services/tempsFort.service";
import {TempsFort} from "../../../../models/tempsFort";

@Component({
    selector: 'ng-tempsFort',
    templateUrl:'/client-app/app/channel/channelPage/tempsFort/components/tempsFort.component.html',

})

export class TempsFortComponent implements OnInit{

    private name : string;
    private tempsFortList :TempsFort[] = [];
    @Input () private channelID : string

    constructor(private route: ActivatedRoute, private tempsFortsService: TempsFortService) {

    }


    ngOnInit(){

        this.tempsFortsService.getTempsFort(this.channelID).subscribe(
            tempsFortList => {
                this.tempsFortList = tempsFortList;
            },
            err =>{
                console.log(err);
            }
        );
        this.tempsFortsService.getTempsFortAdded(this.channelID).subscribe(
            tempsFort => {
                this.tempsFortList.push(tempsFort);
            }
        );

    }

}