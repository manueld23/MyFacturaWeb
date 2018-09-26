import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';

import { FormsModule }      from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule }      from './app-routing.module';
import { AppComponent }          from './app.component';
import { LoginComponent }        from './components/login/login.component';
import { PrincipalComponent }    from './components/principal/principal.component';

//Catalogos
import { ProductFormComponent }  from './components/Catalogos/product-form/product-form.component';
import { EmpleadoComponent }     from './components/Catalogos/empleado/empleado.component';

//Documentos
import { GCFDI33Component }      from './components/Documentos/g-cfdi33/g-cfdi33.component';
import { Nomina12Component }     from './components/Documentos/nomina12/nomina12.component';
import { RetencionesComponent }  from './components/Documentos/retenciones/retenciones.component';

//Registros
import { RCFDI33Component }      from './components/Registros/rcfdi33/rcfdi33.component';
import { RretencionesComponent } from './components/Registros/rretenciones/rretenciones.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductFormComponent,
    EmpleadoComponent,
    LoginComponent,
    PrincipalComponent,
    GCFDI33Component,
    Nomina12Component,
    RetencionesComponent,
    RCFDI33Component,
    RretencionesComponent
  ],
  imports: [
    FormsModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
