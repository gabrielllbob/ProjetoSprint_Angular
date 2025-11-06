import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Login } from './login';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  alterarLembrar() {
    this.login.lembrar = !this.login.lembrar;
  }
  formSubmit() {
    console.log(this.login);
  }
  login: Login = {
    login: '',
    senha: '',
    lembrar: false
  }
}
