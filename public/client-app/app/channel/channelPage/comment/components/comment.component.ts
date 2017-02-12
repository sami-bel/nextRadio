
import {Component, OnInit, Input} from '@angular/core';

import { Comment } from '../../../../models/comment'
import {CommentService} from '../services/comment.service';

// Component decorator
@Component({
    selector: 'ng-comment',
    templateUrl: '/client-app/app/channel/channelPage/comment/components/comment.component.html'

})
export class CommentComponent implements OnInit{

    @Input() channelID: string;

    private model = new Comment();
    private comments: Comment[] = [];
    private comment :Comment;

    constructor(private commentService:CommentService) {
    }

    ngOnInit(): void {
        this.commentService.getComments(this.channelID).subscribe(
            comments => {
                this.comments = comments;
            },
            err =>{
                console.log(err);
            }
        );
        this.commentService.getCommentAdded(this.channelID).subscribe(
            comment => {
                this.comments.push(comment);
            }
        );
    }
    sendMessage(){

        this.commentService.addComment(this.model,this.channelID).subscribe(
            comment =>{
                this.model = new Comment();
            },
            err => {
                console.log(err);
            });
      }

}
