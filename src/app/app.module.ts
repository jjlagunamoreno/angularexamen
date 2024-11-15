import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//servicios necesarios a importar
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { ServiceCubos } from './services/service.cubos';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { ComentariosComponent } from './components/comentarios/comentarios.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { CubosmarcaComponent } from './components/cubosmarca/cubosmarca.component';
import { ComprasComponent } from './components/compras/compras.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { RegisterComponent } from './components/register/register.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { LoginComponent } from './components/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    DetallesComponent,
    ComentariosComponent,
    NotfoundComponent,
    CubosmarcaComponent,
    ComprasComponent,
    PedidoComponent,
    RegisterComponent,
    PerfilComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [provideHttpClient(), ServiceCubos],
  bootstrap: [AppComponent]
})
export class AppModule { }
