import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tag } from '../model/tag.model';

const baseUrl = 'http://localhost:7905/api/tutorials';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private http: HttpClient) { }

  getAllTags(tutorialId: any): Observable<Tag[]>{
    return this.http.get<Tag[]>(`${baseUrl}/${tutorialId}/tags`);
  }
}
