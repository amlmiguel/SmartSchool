import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Aluno } from '../models/aluno';

@Injectable({
  providedIn: 'root'
})

export class AlunoService {

  baseUrl = `${environment.baseUrl}/api/aluno`;

  constructor(private http: HttpClient) { }

getAll(): Observable<Aluno[]> {
  return this.http.get<Aluno[]>(`${this.baseUrl}`);
}

getById(id: number): Observable<Aluno> {
  return this.http.get<Aluno>(`${this.baseUrl}/${id}`);
}

// tslint:disable-next-line: typedef
post(aluno: Aluno) {
  return this.http.post(`${this.baseUrl}`, aluno);
}

// tslint:disable-next-line: typedef
put(id: number, aluno: Aluno) {
  return this.http.put(`${this.baseUrl}/${id}`, aluno);
}

// tslint:disable-next-line: typedef
delete(id: number) {
  return this.http.delete(`${this.baseUrl}/${id}`);
}


}
