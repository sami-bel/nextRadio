import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import {ChannelRoutingModule} from './channel-routing.module';

import { ChannelsListComponent } from './channelsList/components/channelsList.component';
import {ChannelPageComponent} from './channelPage/channelPage.component'
import { ChannelsListService } from './channelsList/service/channelsList.service';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        ChannelRoutingModule

    ],
    declarations: [
        ChannelsListComponent,
        ChannelPageComponent

    ],

    providers: [
        ChannelsListService
    ],

    exports:[
        ChannelsListComponent
    ]

})
export class ChannelModule {
}

