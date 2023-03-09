import { OnInit, Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Coche } from './coche';
import { CocheService } from './coche.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  coche: Coche = new Coche();
  titulo: string = "Crear coche"

  constructor(private cocheService: CocheService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.cargarCoche()
  }


  cargarCoche(): void{
    this.activatedRoute.params.subscribe(params =>  {
      let matricula = params['matricula']
      if (matricula) {
        this.cocheService.getCoche(matricula).subscribe(coche=> this.coche = coche)
      }
    })
  }


  crearCoche(): void {
    this.cocheService.crearCoche(this.coche)
    .subscribe( 
      coche => {
        this.router.navigate(['/coches'])
        Swal.fire('Nuevo coche', `Coche ${coche.matricula} creado con éxito!`, 'success')
    });
  }

  actualizarCoche(): void {
    this.cocheService.actualizar(this.coche).subscribe(coche => {
      this.router.navigate(['/coches'])
      Swal.fire('Coche actualizado', `Coche ${coche.matricula} actualizado con éxito!`, 'success')
    })
  }

}
