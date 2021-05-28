import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentService } from 'src/app/comment/comment.service';
import { Comment } from 'src/app/shared/model/comment.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public comments?: Comment[];

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    this.getComments();
  }

  private getComments(): void {
    this.commentService
      .getAll()
      .subscribe((response: Comment[]) => (this.comments = response));
  }

  public addComment(comment: Comment): void {
    this.comments?.push(comment);
  }

  public removeComment(index: number) {
    this.comments?.splice(index, 1);
  }
}
