import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { MenuComponent } from './components/menu.component';
import { ProgramComponent } from './components/program.component';



import { ChannelsService } from './services/channels.service';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,


    ],
    declarations: [
        MenuComponent,ProgramComponent
    ],

    providers: [
        ChannelsService
    ],

    exports:[
        MenuComponent,ProgramComponent

    ]

})
export class MenuModule {
}

