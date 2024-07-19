import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeseroService {
  private apiUrl = 'http://localhost:3000/api/v1/meseros';

  constructor(private http: HttpClient) {}

  getMeseros(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  deleteMesero(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
