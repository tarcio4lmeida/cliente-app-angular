import { ServicoPrestadoService } from './../../servico-prestado.service';
import { ServicoPrestado } from './../servicoPrestado';
import { Cliente } from './../../clientes/cliente';
import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../clientes.service';

@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrls: ['./servico-prestado-form.component.css']
})
export class ServicoPrestadoFormComponent implements OnInit {

  clientes: Cliente[] = [];
  servico: ServicoPrestado;
  sucess: boolean = false;
  errors: String[];

  constructor(
    private clientesService : ClientesService,
    private servicoPrestado : ServicoPrestadoService
  ) {
    this.servico = new ServicoPrestado();
  }

  ngOnInit(): void {
    this.clientesService
      .getClientes()
      .subscribe(response => this.clientes = response );
  }
  
  onSubmit(){
    this.servicoPrestado
      .salvar(this.servico)
      .subscribe(response => { //subscribe recebe a resposta do observable 
        this.errors = null;
        this.sucess = true;
        this.servico = new ServicoPrestado(); //limpo o servico para ele incluir outro
      }, errorResponse => {
        this.errors = errorResponse.error.errors;
        this.sucess = false;
      })
  }
}
