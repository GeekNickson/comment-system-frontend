import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SERVER_API_URL } from '../app.constants';
import { Comment } from '../shared/model/comment.model';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private resourceUrl = SERVER_API_URL + 'comment';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.resourceUrl);
  }

  getOne(id: string): Observable<Comment> {
    return this.http.get<Comment>(`${this.resourceUrl}/${id}`);
  }

  create(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(this.resourceUrl, comment);
  }

  update(id: string, comment: Comment): Observable<Comment> {
    return this.http.put<Comment>(`${this.resourceUrl}/${id}`, comment);
  }

  delete(id: string): Observable<Comment> {
    return this.http.delete<Comment>(`${this.resourceUrl}/${id}`);
  }
}
