import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Comment } from 'src/app/shared/model/comment.model';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss'],
})
export class AddCommentComponent implements OnInit {
  commentForm = new FormGroup({
    text: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(255),
    ]),
    rating: new FormControl('', [
      Validators.required,
      Validators.min(1),
      Validators.max(5),
    ]),
  });

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {}

  createComment(): void {
    const newComment: Comment = this.commentForm.value;
    this.commentService
      .create(newComment)
      .subscribe((response: Comment) => console.log(response));
  }
}
