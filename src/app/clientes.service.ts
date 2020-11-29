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
  
  salvar (cliente: Cliente) : Observable<Cliente> {
    // Observable -> requisicao assíncrona -> observable fica observando até quando a req. encerrar
    return this.http.post<Cliente>('http://localhost:8080/api/clientes', cliente);
  }

  getClientes() :Observable <Cliente[]>{
    return this.http.get<Cliente[]>('http://localhost:8080/api/clientes');
  }

  atualizar(cliente: Cliente) :Observable <any>{
    return this.http.put<Cliente>(`http://localhost:8080/api/clientes/${cliente.id}`, cliente);
  }

  getClientesById(id: number) :Observable <Cliente>{
    return this.http.get<any>(`http://localhost:8080/api/clientes/${id}`);
  }
}
