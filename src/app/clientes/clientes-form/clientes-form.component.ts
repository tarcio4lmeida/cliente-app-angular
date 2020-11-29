import { Cliente } from '../cliente';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params  } from '@angular/router';

import { ClientesService } from '../../clientes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})

export class ClientesFormComponent implements OnInit {

  cliente: Cliente;
  sucess: boolean = false;
  errors: String[];
  id: any;

  constructor(private service: ClientesService,
              private router: Router,
              private activatedRoute : ActivatedRoute
              ) { //quando declaramos no construtor estamos criando uma variavel
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
    let params  = this.activatedRoute.params
    console.log(params)
    if (params && params.value && params.value.id) {
      this.id =  params.value.id;
      this.service
        .getClientesById(this.id)
        .subscribe(
          response => this.cliente = response,
          errorResponse => this.cliente = new Cliente()
        )
    }
  }

  voltarParaListagem() {
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
