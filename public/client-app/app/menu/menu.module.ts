import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { ChannelsComponent } from './components/channels.component';
import { MenuComponent } from './components/menu.component';
import { ProgramComponent } from './components/program.comonent';



import { ChannelsService } from './services/channels.service';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,


    ],
    declarations: [
        ChannelsComponent,
        MenuComponent,ProgramComponent
    ],

    providers: [
        ChannelsService
    ],

    exports:[
        ChannelsComponent,
        MenuComponent,ProgramComponent

    ]

})
export class MenuModule {
}

