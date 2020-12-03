import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { LoginComponent } from './login/login.component';

const routes: Routes =[
  {path: 'login', component: LoginComponent},
  {path: '', component: LayoutComponent, 
    children: [
      {path: 'home', component: HomeComponent}, //rota filha
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
