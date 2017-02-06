import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import {ChannelRoutingModule} from './channel-routing.module';
import {ChannelPlayerComponent} from './channelPage/components/channelPlayer.component';
import { ChannelsListComponent } from './channelsList/components/channelsList.component';
import {ChannelPageComponent} from './channelPage/components/channelPage.component'
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
        ChannelPageComponent,ChannelPlayerComponent

    ],

    providers: [
        ChannelsListService
    ],

    exports:[
        ChannelsListComponent,
        ChannelPageComponent,ChannelPlayerComponent
    ]

})
export class ChannelModule {
}

