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

  constructor(
    private clientesService : ClientesService
  ) {
    this.servico = new ServicoPrestado();
  }

  ngOnInit(): void {
    this.clientesService
      .getClientes()
      .subscribe(response => this.clientes = response );
  }
  
  onSubmit(){
    console.log("teste")
  }
}