import { Component, OnInit } from '@angular/core';
import { Coche } from './coche';
import { CocheService } from './coche.service';
import Swal from 'sweetalert2';


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

  borrarCoche(coche: Coche): void {
    Swal.fire({
      title: 'Estás seguro?',
      text: `Quieres borrar el coche ${coche.matricula}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#5B9423',
      cancelButtonColor: '#d33',
      cancelButtonText: 'No, mantener!',
      confirmButtonText: 'Si, borrar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.cocheService.borrarCoche(coche.matricula).subscribe(
          response => {
            this.coches = this.coches.filter(c => c!== coche)
            Swal.fire(
              'Borrado!',
              `El coche ${coche.matricula} ha sido borrado!`,
              'success'
            )
          }
        )
        
      }
    })
  }

}
