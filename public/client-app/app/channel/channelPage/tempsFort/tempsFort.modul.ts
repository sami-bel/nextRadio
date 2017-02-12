import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import {TempsFortService}from './services/tempsFort.service';
import {TempsFortComponent} from  './components/tempsFort.component'
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,


    ],
    declarations: [
        TempsFortComponent
    ],

    providers: [
        TempsFortService
    ],

    exports:[
        TempsFortComponent
    ]

})
export class TempsFortModule {
}

