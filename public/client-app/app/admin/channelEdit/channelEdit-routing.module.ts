import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const   channelEditRoutes: Routes = [

        ];


@NgModule({
    imports: [
        RouterModule.forChild(channelEditRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ChannelEditRoutingModule { }