import { OnInit, Component } from '@angular/core';
import { Router } from '@angular/router';
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
    private router: Router) {

  }

  ngOnInit() {

  }

  public crearCoche(): void {
    this.cocheService.crearCoche(this.coche).subscribe(
      response => this.router.navigate(['/coches'])
    )
  }

}
