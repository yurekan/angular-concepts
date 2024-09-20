import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Post } from '../post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private httpClient: HttpClient) {}

  // Using Http Client, we are fetching the data from above url
  getPosts(){
    return this.httpClient.get(this.url);
  }

  // Same, using Observable, we can fetch the same data .. Both HttpClient and Observable
  // helps us do the same
  public getPostUsingObservable(): Observable<any>{
    return this.httpClient.get(this.url);
  }
}
