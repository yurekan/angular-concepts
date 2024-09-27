import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../model/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseUrl = 'http://localhost:8082/api/v1/admin';
  constructor(private httpClient: HttpClient) { }

  getAdminList(): Observable<Admin[]>{
    return this.httpClient.get<Admin[]>(this.baseUrl);
  }

  addAdmin(admin: Admin): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, admin)
  }

  updateAdmin(name: string, admin: Admin): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${name}`, admin);
  } 
}
