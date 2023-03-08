import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.componente';
import { FooterComponent } from './footer/footer.component';
import { CochesComponent } from './coches/coches.component';
import { CocheService } from './coches/coche.service';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  {path: '', redirectTo: '/coches', pathMatch: 'full'},
  {path: 'coches', component: CochesComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CochesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CocheService],
  bootstrap: [AppComponent]
})
export class AppModule { }
