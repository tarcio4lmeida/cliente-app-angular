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
  ) { }

  onSubmit(){
    console.log(`user: ${this.username}, password: ${this.password}` );
  }

  preparaCadastrar(event){
    event.preventDefault();
    this.cadastrando = true;
  }
  
  cancelaCadastro(){
    this.cadastrando = false;
  }
}
