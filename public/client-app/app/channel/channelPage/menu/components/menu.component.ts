/* * * ./app/comments/components/index.ts * * */
// Imports
import {Component, Input} from '@angular/core';

@Component({
  selector: 'ng-menu',
  template: `
        <div>
            <h2> Channel Program</h2>         
        </div>
        <channels-program [channelID]="channelID"></channels-program>
    `
})
export class MenuComponent{
    @Input() channelID :string;
    constructor(){

    }



}
