import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import {ChannelRoutingModule} from './channel-routing.module';
import {ChannelPlayerComponent} from './channelPage/channelPlayer.component';
import { ChannelsListComponent } from './channelsList/components/channelsList.component';
import {ChannelPageComponent} from './channelPage/channelPage.component'
import { ChannelsListService } from '../shard/service/channelsList.service';
import {CommentModule} from './channelPage/comment/comment.module'
import{ MenuModule} from './channelPage/menu/menu.module'
import {TempsFortModule} from './channelPage/tempsFort/tempsFort.modul'
import {ChannelPageService} from "./channelPage/channelPage.service";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        MenuModule,
        CommentModule,
        ChannelRoutingModule,
        TempsFortModule

    ],
    declarations: [
        ChannelsListComponent,
        ChannelPageComponent,ChannelPlayerComponent

    ],

    providers: [
        ChannelsListService,ChannelPageService,
    ],

    exports:[
        ChannelsListComponent,
        ChannelPageComponent,ChannelPlayerComponent
    ]

})
export class ChannelModule {
}

