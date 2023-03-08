import { Injectable } from '@angular/core';
import { COCHES } from './coches.json';
import { Coche } from './coche';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CocheService {

  private urlEndPoint: string = 'http://localhost:8080/api/coches';

  constructor(private http: HttpClient) { }

  getCoches(): Observable<Coche[]> {
    return this.http.get<Coche[]>(this.urlEndPoint);
  }

}
