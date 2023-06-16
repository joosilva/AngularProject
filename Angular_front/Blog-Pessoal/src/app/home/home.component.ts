import { Component, OnInit } from '@angular/core';
import { environment } from '../../environment/environment.prod';
import { Router } from '@angular/router';
import { Postagem } from '../model/Postagem';
import { PostagemService } from '../service/postagem.service';
import { Usuario } from '../model/Usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nome = environment.nome;
  foto = environment.foto;
  postagem: Postagem = new Postagem();
  usuario: Usuario = new Usuario();
  idUsuario = environment.id;

  constructor(
    private router: Router,
    private postagemService: PostagemService
  ) {}

  ngOnInit() {
    window.scroll(0,0);

    if(environment.token == "") {
      this.router.navigate(["/login"]);
    }
  }

  post() {
    this.usuario.id = this.idUsuario;
    this.postagem.usuario = this.usuario;

    this.postagemService.postPost(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp;
      alert("Sua postagem foi publicada!")

      this.postagem = new Postagem();
    })
  }

}
