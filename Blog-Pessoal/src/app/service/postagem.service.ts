import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment.prod';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set("Authorization", environment.token)
  }

  getAllPosts(): Observable<Postagem[]> {
    return this.http.get<Postagem[]>("http://localhost:8080/posts", this.token)
  }

  postPost(postagem: Postagem): Observable<Postagem> {
    return this.http.post<Postagem>("http://localhost:8080/posts", postagem, this.token)
  }

}
