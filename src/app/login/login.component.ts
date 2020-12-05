import { Usuario } from './usuario';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   
  username: string;
  password: string;
  cadastrando: boolean;
  mensagemSucesso: string;
  errors: String[];

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  onSubmit(){
    console.log(`user: ${this.username}, password: ${this.password}` );
    this.authService.
      tentarLogar(this.username, this.password)
      .subscribe(response => {
        const access_token = JSON.stringify(response); //pega o token e transforma em string
        localStorage.setItem('access_token', access_token);
        this.router.navigate(['/home'])
      }, errorResponse =>{
        console.log(errorResponse)
        this.errors = ['Usuário e/ou senha incorreto(s)'];
      })
  }

  preparaCadastrar(event){
    event.preventDefault();
    this.cadastrando = true;
  }
  
  cancelaCadastro(){
    this.cadastrando = false;
  }

  cadastrar (){
    const usuario : Usuario = new Usuario();

    usuario.username = this.username;
    usuario.password = this.password;

    this.authService
      .salvar(usuario)
      .subscribe(response =>{
      this.mensagemSucesso = "Cadastro realizado com sucesso! Efetue o Login"
      this.cadastrando = false // vai pro login
      this.username = '';
      this.password = '';
      this.errors = null;
      
      }, errorResponse =>{
        this.errors = errorResponse.error.errors;
        this.mensagemSucesso = null;
    })

  }
}
