import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  onSubmit(){
    console.log(`user: ${this.username}, password: ${this.password}` );
  }

  preparaCadastrar(event){
    event.preventDefault();
    this.cadastrando = true;
  }
  
}
