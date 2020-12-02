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
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
