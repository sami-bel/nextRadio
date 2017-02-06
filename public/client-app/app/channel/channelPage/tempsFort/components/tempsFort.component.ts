import {Component, OnInit, OnChanges} from '@angular/core';

import {ActivatedRoute, Params} from "@angular/router";

@Component({
    selector: 'ng-tempsFort',
    template:`<div >
                    <!--<div *ngFor="let comment of comments" class="message-box" >-->
                    <div class="message-box" >
                         <span> samidgfkemlkk djklsdjl </span> :
                    </div>
                    <div class="message-box" >
                         <span> sami </span> 
                    </div>
                    <div class="message-box" >
                         <span> houhou </span> 
                    </div>
                    <div class="message-box" >
                         <span> houhou </span> 
                    </div>
              </div>
             
        `,
    // styles:[`.test { margin-left: 0px; overflow: auto;}`]
    // styleUrls:['client-app/app/channel/channelPage/channelPage.component.css']
})

export class TempsFortComponent implements OnInit{

    private name : string;

    constructor(private route: ActivatedRoute) {

    }
    ngOnInit(){
        // this.route.params.subscribe(params => { this.name = params['name']});

    }

}