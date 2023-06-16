import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { environment } from '../../environment/environment.prod';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  usuarioLogin: UsuarioLogin = new UsuarioLogin();

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}
  
  ngOnInit() {
    window.scroll(0,0);
  }

  login() {
    this.authService.login(this.usuarioLogin).subscribe((resp: UsuarioLogin) => {
      this.usuarioLogin = resp;

      environment.token = this.usuarioLogin.token;
      environment.nome = this.usuarioLogin.nome;
      environment.foto = this.usuarioLogin.foto;

      this.router.navigate(["/home"])
    }, error => {
      if(error.status == 401 || error.status == 500) {
        alert("Usuário ou senha incorretos. Digite novamente.")
      }
    })
  }

}
