import { ServicoPrestadoService } from './servico-prestado.service';
import { ServicoPrestadoModule } from './servico-prestado/servico-prestado.module';
import { ClientesModule } from './clientes/clientes.module';
import { HomeComponent } from './home/home.component';
import { TemplateModule } from './template/template.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ClientesService } from './clientes.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TemplateModule,
    AppRoutingModule,
    ClientesModule,
    ServicoPrestadoModule
  ],
  providers: [ClientesService, ServicoPrestadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
