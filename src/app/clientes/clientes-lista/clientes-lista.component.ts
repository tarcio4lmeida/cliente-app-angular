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
  clienteSelecionado: Cliente;
  mensagemSucesso: string;
  mensagemErro: string;
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

  
  public preparaDelecao(cliente: Cliente){
    this.clienteSelecionado = cliente;
  }
  
  public deletarCliente(){
   console.log(this.clienteSelecionado);
   this.service.deletar(this.clienteSelecionado)
   .subscribe(resposta =>{
    this.mensagemSucesso = "Cliente deletado com sucesso!"
    this.ngOnInit();
   }, errorResponse =>{
    this.mensagemSucesso = "Ocorreu um erro ao deletar o cliente"
   })
  }
}
