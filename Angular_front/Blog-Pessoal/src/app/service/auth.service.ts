import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UsuarioLogin } from '../model/UsuarioLogin';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin> {
    return this.http.post<UsuarioLogin>("http://localhost:4200/logar", usuarioLogin);
  }

  register(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>("http://localhost:4200/cadastrar", usuario);
  }
}