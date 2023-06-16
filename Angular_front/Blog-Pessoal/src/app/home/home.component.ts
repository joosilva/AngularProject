import { Component, OnInit } from '@angular/core';
import { environment } from '../../environment/environment.prod';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nome = environment.nome;
  foto = environment.foto;

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    window.scroll(0,0);

    if(environment.token == "") {
      /*this.router.navigate(["/login"]);*/
    }
  }

}
