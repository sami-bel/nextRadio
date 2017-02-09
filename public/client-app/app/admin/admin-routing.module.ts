import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from './admin.component'
import {ChannelsListComponent} from './components/channelsList.component'
import {CreateChannelComponent} from './components/createChannel.component'

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
              children:[
                  { path: 'programChannel',
                    children:[]
                  },
                  { path: 'tempsFortChannel',
                    children:[]
                  },
                  { path: 'programChannel',
                    children:[]
                  },
                  { path: 'programChannel',
                    children: []
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