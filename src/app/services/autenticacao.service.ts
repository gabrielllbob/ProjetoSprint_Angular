import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private httpClient: HttpClient) { }

  autenticar(login: string, senha: string): Observable<any> {
    return this.httpClient.post('http://localhost:3001/login', { login: login, senha: senha });
  }  
}
