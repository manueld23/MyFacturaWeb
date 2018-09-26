import { NgModule }              from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { LoginComponent }        from './components/login/login.component';
import { PrincipalComponent }    from './components/principal/principal.component';

//Catalogos
import { EmpleadoComponent }     from './components/Catalogos/empleado/empleado.component';
import { ProductFormComponent }  from './components/Catalogos/product-form/product-form.component';

//Documentos
import { GCFDI33Component }      from './components/Documentos/g-cfdi33/g-cfdi33.component';
import { Nomina12Component }     from './components/Documentos/nomina12/nomina12.component';
import { RetencionesComponent }  from './components/Documentos/retenciones/retenciones.component';

//Registros
import { RCFDI33Component }      from './components/Registros/rcfdi33/rcfdi33.component'; 
import { RretencionesComponent } from './components/Registros/rretenciones/rretenciones.component';

const routes: Routes = [
    { path: '',             component:LoginComponent },
    { path: 'principal',    component: PrincipalComponent },

    //documentos
    { path: 'g-cfdi33',     component: GCFDI33Component },
    { path: 'nomina12',     component: Nomina12Component },
    { path: 'retenciones',  component: RetencionesComponent },

    //Catalogos
    { path: 'producto',     component: ProductFormComponent },
    { path: 'empleado',     component: EmpleadoComponent },

    //Registros
    { path: 'rcfdi33',      component: RCFDI33Component},
    { path: 'Rretenciones', component: RretencionesComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule] 
})

export class AppRoutingModule {}