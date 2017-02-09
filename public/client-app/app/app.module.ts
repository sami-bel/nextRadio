import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import {PageNotFoundComponent} from './pageNoteFouned.component';
import { MenuModule } from './channel/channelPage/menu/menu.module';
import { ChannelModule } from './channel/channel.module';

import { AppComponent }         from './app.component';
import { EmitterService }          from './emitter.service';

import {AppRoutingModule} from './api-routing.module'
import {AdminModule} from './admin/admin.module'


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AdminModule,
    ChannelModule,

    AppRoutingModule

  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent

  ],
  providers: [
    EmitterService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
