import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importar todos los componentes necesarios
import { HomeComponent } from './components/home/home.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RegisterComponent } from './components/register/register.component';
import { CubosmarcaComponent } from './components/cubosmarca/cubosmarca.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ComprasComponent } from './components/compras/compras.component';
import { PedidoComponent } from './components/pedido/pedido.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'detalles/:idcubo', component: DetallesComponent }, 
  { path: 'marca/:marca', component: CubosmarcaComponent }, 
  { path: 'login', component: LoginComponent }, 
  { path: 'register', component: RegisterComponent }, 
  { path: 'perfil', component: PerfilComponent }, 
  { path: 'compras', component: ComprasComponent }, 
  { path: 'pedido', component: PedidoComponent }, 
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
