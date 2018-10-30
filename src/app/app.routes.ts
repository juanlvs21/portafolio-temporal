// Importar Componentes
import { InicioComponent } from './components/inicio/inicio.component';

// Importar Rutas
import { Routes } from '@angular/router';
import { AcercaComponent } from './components/acerca/acerca.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';

export const ROUTES: Routes = [
    { path: 'inicio', component: InicioComponent},
    { path: 'acerca', component: AcercaComponent},
    { path: 'portafolio', component: PortafolioComponent},
    { path: 'contacto', component: ContactoComponent},
    { path: '', pathMatch: 'full', redirectTo: 'inicio'},
    { path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];
