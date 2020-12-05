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
  
  apiURL: string = environment.apiUrlBase + "/api/usuarios"

  constructor(
    private http: HttpClient
  ) { }

  salvar(usuario: Usuario) : Observable<any> {
    return this.http.post<any>(this.apiURL, usuario);
  }
}
