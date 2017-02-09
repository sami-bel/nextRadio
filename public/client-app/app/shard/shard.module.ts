import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import {ChannelsListService} from './service/channelsList.service'


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,




    ],
    declarations: [
    ],

    providers: [
        ChannelsListService
    ],

    exports:[

    ]

})
export class ShardModule {
}

