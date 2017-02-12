
import {Component, OnInit} from '@angular/core';

import { Comment } from '../../models/comment';
import {CommentService} from '../services/comment.service';

// Component decorator
@Component({
    selector: 'commentaire-page',
    templateUrl: '/client-app/app/comment/components/commentaire.component.html'
    // templateUrl: 'commentaire.component.html'

})
export class CommentaireComponent implements OnInit{


    private model = new Comment();
    private comments: Comment[] = [];
    private comment :Comment;

    constructor(private commentService:CommentService) {
    }

    ngOnInit(): void {
        this.commentService.getCommentAdded().subscribe(
            comment => {
                console.log('bravo');
                console.log(comment);
                this.comments.push(comment);
            }
        );
    }
    sendMessage(){
        this.commentService.addComment(this.model).subscribe(
            comment =>{
                this.comment = new Comment();
                console.log(comment)
                console.log(this.comments)

            },
            err => {
                // Log errors if any
                console.log(err);
            });
      }

}
