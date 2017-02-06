import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { CommentBoxComponent } from './components/comment-box.component';
import { CommentListComponent } from './components/comment-list.component';
import { CommentFormComponent } from './components/comment-form.component';
import { CommentComponent } from './components/index';
import { CommentaireComponent} from  './components/commentaire.component'


import { CommentService } from './services/comment.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,

  ],
  declarations: [
    CommentBoxComponent,
    CommentFormComponent,
    CommentListComponent,
    CommentComponent,
    CommentaireComponent
  ],

  providers: [
    CommentService
  ],

  exports:[
    CommentaireComponent,
    CommentBoxComponent,
    CommentFormComponent,
    CommentListComponent,
    CommentComponent,

  ]

})
export class Comment1Module {
}

