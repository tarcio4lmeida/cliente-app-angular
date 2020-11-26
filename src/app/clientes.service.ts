import { Cliente } from './clientes/cliente';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) {

  }

  getCliente() : Cliente{
    let cliente: Cliente = new Cliente();
    cliente.nome = 'Fulano de tal';
    cliente.cpf = '88888888888'
    
    return cliente; 
  }
  
  salvar (cliente: Cliente) : Observable<Cliente> {
    // Observable -> requisicao assíncrona -> observable fica observando até quando a req. encerrar
    return this.http.post<Cliente>('http://localhost:8080/api/clientes', cliente);
  }
}
