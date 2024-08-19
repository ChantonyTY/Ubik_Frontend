import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantTableService {
  private baseUrl = 'http://localhost:8080/api/tables'; // URL de base de votre API

  constructor(private http: HttpClient) { }

  getTables(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getTable(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  createTable(table: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, table);
  }

  updateTable(id: number, table: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, table);
  }

  deleteTable(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
}
