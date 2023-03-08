import { Component, OnInit } from '@angular/core';
import { Coche } from './coche';
import { COCHES } from './coches.json';

@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html'
})
export class CochesComponent implements OnInit {

  coches: Coche[];


  constructor() {

  }

  ngOnInit(): void {
    this.coches= COCHES;
  }

}
