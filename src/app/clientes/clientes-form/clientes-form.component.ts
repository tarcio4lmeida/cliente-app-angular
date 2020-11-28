import { Cliente } from '../cliente';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ClientesService } from '../../clientes.service';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})

export class ClientesFormComponent implements OnInit {

  cliente: Cliente;
  sucess: boolean = false;
  errors: String[];
  
  constructor(private service: ClientesService,
              private router: Router) { //quando declaramos no construtor estamos criando uma variavel
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
  }

  voltarParaListagem(){
    this.router.navigate(['/clientes-lista']);
  }

  onSubmit() {
    this.service.salvar(this.cliente)
      .subscribe(response => { //subscribe recebe a resposta do observable 
        this.errors = null;
        this.sucess = true;
        this.cliente = response;
      }, errorResponse => {
        this.errors = errorResponse.error.errors;
        this.sucess = false;
      })
  }
  v
}
