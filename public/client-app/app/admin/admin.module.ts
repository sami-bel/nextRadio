import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { CreateChannelComponent} from './components/createChannel.component';
import { ChannelsListComponent} from './components/channelsList.component';
import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin.component'
import {AdminChannelService} from './adminChannel.service'
import {ChannelEditModule} from './channelEdit/channelEdit.module'


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        ChannelEditModule,
        AdminRoutingModule,



    ],
    declarations: [
        AdminComponent,
        CreateChannelComponent,
        ChannelsListComponent,

    ],

    providers: [
        AdminChannelService
    ],

    exports:[
        AdminComponent, CreateChannelComponent,ChannelsListComponent
    ]

})
export class AdminModule {
}

