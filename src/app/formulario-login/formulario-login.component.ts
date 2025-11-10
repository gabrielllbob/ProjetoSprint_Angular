import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Login } from '../login/login';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-formulario-login',
  imports: [FormsModule, NgIf],
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent {

  alterarLembrar() {
    this.login.lembrar = !this.login.lembrar;
  }
  formSubmit() {
    console.log(this.login);
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
