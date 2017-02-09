import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import {ChannelsListComponent} from '.channelsList/components/channelsList.component'
// import {ChannelPageComponent} from './channelPage/channelPage.component'

const channelRoutes: Routes = [
    // { path: 'channels',  component:ChannelsListComponent  },
    // { path: 'channel/:name', component: ChannelPageComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(channelRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ChannelRoutingModule { }