import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Comment } from '../shared/model/comment.model';
import { CommentService } from './comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  @Input()
  public comment?: Comment;
  @Input()
  public index?: number;

  @Output()
  commentDeletedEvent = new EventEmitter<number>();

  constructor(private commetService: CommentService) {}

  ngOnInit(): void {}

  delete(): void {
    this.commetService
      .delete(this.comment?._id!)
      .subscribe((response: Comment) =>
        this.commentDeletedEvent.emit(this.index)
      );
  }
}
