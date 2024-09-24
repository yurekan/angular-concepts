import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../model/comment.model';

const baseURL = 'http://localhost:7905/api';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  getAllCommentsForTutorial(tutorialId: any): Observable<Comment[]>{
    return this.http.get<Comment[]>(`${baseURL}/tutorials/${tutorialId}/comments`);
  }

  createComment(tutorialId: any, data: any): Observable<any>{
    return this.http.post(`${baseURL}/tutorials/${tutorialId}/comments`, data);
  }

  deleteCommentOfTutorial(tutorialId: any): Observable<any>{
    return this.http.delete(`${baseURL}/tutorials/${tutorialId}/comments`);
  }

  getComment(id: any): Observable<Comment>{
    return this.http.get<Comment>(`${baseURL}/comments/${id}`);
  }

  deleteComment(id: any): Observable<any>{
    return this.http.delete(`${baseURL}/comments/${id}`);
  }

}
