import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tutorial } from '../model/tutorial.model';

const baseURL = 'http://localhost:7905/api/tutorials';

@Injectable({
  providedIn: 'root'
})
export class TutotorialService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(baseURL);
  }

  get(id: any): Observable<Tutorial> {
    return this.http.get<Tutorial>(`${baseURL}/${id}`);
  }

  create(data:any): Observable<any> {
    return this.http.post(baseURL,data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseURL}/${id}`,data);
  }
  delete(id:any): Observable<any> {
    return this.http.delete(`${baseURL}/${id}`); // through string templating (TypeScript)
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseURL);
  }

  findByTitle(title: any): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(`${ baseURL }?title=${title}`);
  }
}
