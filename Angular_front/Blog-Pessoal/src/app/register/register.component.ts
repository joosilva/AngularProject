import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  usuario: Usuario = new Usuario;
  password: string;

  ngOnInit() {
    window.scroll(0,0);
  }

  confirmPassword(event: any) {
    this.password = event.target.value;
  }

  register() {
    if(this.usuario.senha != this.confirmPassword) {
      alert("As senhas não coincidem.");
    } else {
      this.authService.register(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp;
        this.router.navigate(["/login"]);
        alert("Usuário cadastrado!");
      })
    }
  }

}
