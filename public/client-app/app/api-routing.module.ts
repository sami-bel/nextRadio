import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MenuComponent} from './channel/channelPage/menu/components/menu.component'
import {ProgramComponent} from './channel/channelPage/menu/components/program.component'

import {PageNotFoundComponent} from './pageNoteFouned.component';
import {ChannelsListComponent} from './channel/channelsList/components/channelsList.component'

const appRoutes: Routes = [
    {   path: '',
        redirectTo:'/channels', pathMatch: 'full'
    },
    {
        path: 'admin', component: PageNotFoundComponent
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
