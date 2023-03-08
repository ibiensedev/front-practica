import { Component, OnInit } from '@angular/core';
import { Coche } from './coche';
import { CocheService } from './coche.service';


@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html'
})
export class CochesComponent implements OnInit {

  coches: Coche[];


  constructor(private cocheService: CocheService) {

  }

  ngOnInit(): void {
    this.cocheService.getCoches().subscribe(
      coches => this.coches = coches
    );
  }

}
