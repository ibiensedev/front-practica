import { Injectable } from '@angular/core';
import { COCHES } from './coches.json';
import { Coche } from './coche';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocheService {

  constructor() { }

  getCoches(): Observable<Coche[]> {
    return of(COCHES);
  }
}
