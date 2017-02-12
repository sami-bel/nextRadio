import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from './admin.component'
import {ChannelsListComponent} from './components/channelsList.component'
import {CreateChannelComponent} from './components/createChannel.component'
import {ChannelEditComponent} from './channelEdit/channelEdit.component';
import {NewProgramComponent}from './channelEdit/components/program/newProgram.component'
import {UpdateProgramComponent}from './channelEdit/components/program/updateProgram.component'
import {NewTempsFortComponent}from './channelEdit/components/tempsFort/newTempsFort.component'
import {ProgramsListComponent}from './channelEdit/components/program/programsList.component'
import {TempsFortListComponent}from './channelEdit/components/tempsFort/tempsFortList.component'
import {Channel} from "../models/channel";


const channelRoutes: Routes = [
    { path: 'admin',
      component: AdminComponent,
      children: [
            {
                path: '',
                component: ChannelsListComponent,
            },
            {
                path: 'newChannel',
                component: CreateChannelComponent,
            },
            {
                path:'editChannel',
                component:ChannelEditComponent,
                children:[
                    { path: '',
                        component:ProgramsListComponent,
                    },
                    { path: 'tempsFortChannel',
                        component:TempsFortListComponent
                    },
                    { path: 'newProgram/:id',
                        component: NewProgramComponent
                    },
                    { path: 'updateProgram',
                        component: UpdateProgramComponent
                    },
                    { path: 'newTempsFort/:id',
                        component:NewTempsFortComponent
                    },
                ]

            }
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(channelRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRoutingModule { }