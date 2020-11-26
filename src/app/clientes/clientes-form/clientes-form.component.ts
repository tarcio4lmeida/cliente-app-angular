import { Cliente } from '../cliente';
import { Component, OnInit } from '@angular/core';

import { ClientesService } from '../../clientes.service';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;
  
  constructor ( private service: ClientesService ) { //quando declaramos no construtor estamos criando uma variavel
    this.cliente = new Cliente();
    
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.cliente)
    this.service.salvar(this.cliente)
    .subscribe(response => { //subscribe recebe a resposta do observable 
       console.log(response);
    }) 
  }
}
