import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import {NewProgramComponent}    from './components/program/newProgram.component';
import {UpdateProgramComponent} from './components/program/updateProgram.component';
import {NewTempsFortComponent} from './components/tempsFort/newTempsFort.component';
import {ProgramsListComponent} from './components/program/programsList.component';
import {TempsFortListComponent} from './components/tempsFort/tempsFortList.component';
import { ChannelEditRoutingModule} from './channelEdit-routing.module';
import { ChannelEditComponent} from './channelEdit.component';
import {ChannelEditService} from './services/channelEdit.service'
import {UpdateChannelComponent} from './components/channel/updateChannel.component'
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        ChannelEditRoutingModule,
    ],
    declarations: [
        NewTempsFortComponent,
        NewProgramComponent,
        UpdateProgramComponent,
        ProgramsListComponent,
        TempsFortListComponent,ChannelEditComponent,UpdateChannelComponent

    ],

    providers: [
        ChannelEditService
    ],

    exports:[
        NewTempsFortComponent,
        NewProgramComponent,
        UpdateProgramComponent,
        ProgramsListComponent,
        TempsFortListComponent,ChannelEditComponent,UpdateChannelComponent
    ]

})
export class ChannelEditModule {
}

