
import {Component, OnInit, Input} from '@angular/core';

import { Comment } from '../model/comment';
import {CommentService} from '../services/comment.service';

// Component decorator
@Component({
    selector: 'ng-comment',
    templateUrl: '/client-app/app/channel/channelPage/comment/components/comment.component.html'

})
export class CommentComponent implements OnInit{

    @Input() channelName: string;

    private model = new Comment('', '', new Date,'');
    private comments: Comment[] = [];
    private comment :Comment;

    constructor(private commentService:CommentService) {
    }

    ngOnInit(): void {
        this.commentService.getCommentAdded(this.channelName).subscribe(
            comment => {
                console.log(this.channelName);
                console.log(comment);
                this.comments.push(comment);
            }
        );
    }
    sendMessage(){
        this.model.channel = this.channelName;
        this.commentService.addComment(this.model).subscribe(
            comment =>{
                this.model = new Comment('','',new Date,'');
                console.log(comment)
                console.log(this.comments)

            },
            err => {
                // Log errors if any
                console.log(err);
            });
      }

}
