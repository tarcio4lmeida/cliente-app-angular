import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Usuario } from './login/usuario';
import { Observable } from 'rxjs';

import { environment } from '../environments/environment'

//import { JwtHelperService } from '@auth0/angular-jwt'  

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  // informacoes para obter o token
  apiURL: string = environment.apiUrlBase + "/api/usuarios"
  tokenURL: string = environment.apiUrlBase + environment.obterTokenUrl;
  clienteId: string = environment.clienteId;
  clientSecret: string = environment.clienteSecret;

  constructor(
    private http: HttpClient
  ) { }

  salvar(usuario: Usuario) : Observable<any> {
    return this.http.post<any>(this.apiURL, usuario);
  }

  tentarLogar (username: string, password: string) : Observable<any>{
    const params = new HttpParams() //corpo da requisicao
      .set('username', username)
      .set('password', password)
      .set('grant_type', 'password')

    const headers = {
      //'clienteId:clienteScret'
      //btoa -> cria uma codificacao
      'Authorization' : 'Basic ' + btoa(`${this.clienteId}:${this.clientSecret}`),
      'Content-Type' : 'application/x-www-form-urlencoded'
    }

    console.log(headers);

    return this.http.post(this.tokenURL, params.toString(), {headers});
  }
}
