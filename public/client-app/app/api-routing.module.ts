import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MenuComponent} from './menu/components/menu.component'
import {ProgramComponent} from './menu/components/program.comonent'
import {ChannelsComponent} from './menu/components/channels.component'

import {PageNotFoundComponent} from './pageNoteFouned.component';
import {ChannelsListComponent} from './channel/channelsList/components/channelsList.component'

const appRoutes: Routes = [
    {   path: '',
        redirectTo:'/channels', pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class AppRoutingModule { }
