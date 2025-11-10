import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Login } from '../login/login';
import { NgIf } from '@angular/common';
import { AutenticacaoService } from '../services/autenticacao.service';

@Component({
  selector: 'app-formulario-login',
  imports: [FormsModule, NgIf],
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent {

  constructor(private authService: AutenticacaoService) { }

  alterarLembrar() {
    this.login.lembrar = !this.login.lembrar;
  }
  formSubmit() {
    console.log(this.login);
    this.authService.autenticar(this.login.login, this.login.senha).subscribe(() => {
      console.log('Usuário autenticado com sucesso!');
    }, (error) => {
      console.error('Erro na autenticação:', error);
      alert('Usuário ou senha inválidos.');
    });
  }
  togglePassword() {
    this.login.showPassword = !this.login.showPassword;
  }
  login: Login = {
    login: '',
    senha: '',
    lembrar: false,
    showPassword: false
  }
}
