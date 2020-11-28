import { ClientesService } from './../../clientes.service';
import { Cliente } from './../cliente';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(private service: ClientesService,
              private router: Router) {

   }

  ngOnInit(): void {  
    this.service.getClientes()
      .subscribe(resposta => { //subscribe recebe a resposta do observable 
        this.clientes = resposta;
      }, errorResponse => {
       
      })

  }

  public novoCadastro(){
    this.router.navigate(['/clientes-form'])
  }

}
