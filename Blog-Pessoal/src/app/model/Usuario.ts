import { Postagem } from "./Postagem";

export class Usuario {
    public id: number;
    public nome: string;
    public nickname: string;
    public email: string;
    public senha: string;
    public foto: string;
    public postagem: Postagem[];
}