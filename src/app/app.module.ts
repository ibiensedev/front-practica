import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.componente';
import { FooterComponent } from './footer/footer.component';
import { CochesComponent } from './coches/coches.component';
import { CocheService } from './coches/coche.service';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './coches/form.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', redirectTo: '/coches', pathMatch: 'full' },
  { path: 'coches', component: CochesComponent },
  { path: 'coches/form', component: FormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CochesComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CocheService],
  bootstrap: [AppComponent]
})
export class AppModule { }
