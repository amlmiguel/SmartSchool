import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Professor } from '../models/Professor';

@Injectable({
  providedIn: 'root'
})

export class ProfessoresService {

  baseUrl = `${environment.baseUrl}/api/professor`;

  constructor(private http: HttpClient) { }

getAll(): Observable<Professor[]> {
  return this.http.get<Professor[]>(`${this.baseUrl}`);
}

getById(id: number): Observable<Professor> {
  return this.http.get<Professor>(`${this.baseUrl}/${id}`);
}

// tslint:disable-next-line: typedef
post(professor: Professor) {
  return this.http.post(`${this.baseUrl}`, professor);
}

// tslint:disable-next-line: typedef
put(professor: Professor) {
  return this.http.put(`${this.baseUrl}/${professor.id}`, professor);
}

// tslint:disable-next-line: typedef
delete(id: number) {
  return this.http.delete(`${this.baseUrl}/${id}`);
}


}
