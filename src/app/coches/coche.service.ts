import { Injectable } from '@angular/core';
import { Coche } from './coche';
import { of, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Type } from '@angular/compiler';

@Injectable()
export class CocheService {

  private urlEndPoint: string = 'http://localhost:8080/api/coches';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getCoches(): Observable<Coche[]> {
    return this.http.get<Coche[]>(this.urlEndPoint);
  }

  crearCoche(coche: Coche): Observable<Coche> {
    return this.http.post<Coche>(this.urlEndPoint, coche, {headers: this.httpHeaders});
  }

  getCoche(matricula): Observable<Coche> {
    return this.http.get<Coche>(`${this.urlEndPoint}/${matricula}`);
 }

 actualizar(coche: Coche): Observable<Coche> {
  return this.http.put<Coche>(`${this.urlEndPoint}/${coche.matricula}`, coche, {headers: this.httpHeaders});
 }

 
 borrarCoche(matricula: string): Observable<Coche> {
  return this.http.delete<Coche>(`${this.urlEndPoint}/${matricula}`, {headers: this.httpHeaders});

}

}
