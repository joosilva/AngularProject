package com.processo.blogpessoal.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity(name = "tb_usuarios")
public class Usuario {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotBlank(message = "Campo obrigatório.")
	@Size(min = 5, max = 64, message = "O nome deve conter entre 5 e 64 caracteres.")
	private String nome;
	
	@NotBlank(message = "Campo obrigatório.")
	@Size(min = 3, max = 16, message = "O nickname deve conter entre 3 e 16 caracteres.")
	private String nickname;
	
	@Schema(example = "email@email.com.br")
	@NotBlank(message = "Campo obrigatório.")
	@Email
	private String usuario;
	
	@NotBlank(message = "Campo obrigatório.")
	@Size(min = 8, message = "A senha deve conter entre 8 e 16 caracteres.")
	private String senha;
	
	private String foto;
	
	@OneToMany
	@JsonIgnoreProperties("usuario")
	private List<Postagem> postagens;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getNickname() {
		return nickname;
	}

	public void setNickname(String nickname) {
		this.nickname = nickname;
	}

	public String getUsuario() {
		return usuario;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public String getFoto() {
		return foto;
	}

	public void setFoto(String foto) {
		this.foto = foto;
	}

	public List<Postagem> getPostagens() {
		return postagens;
	}

	public void setPostagens(List<Postagem> postagens) {
		this.postagens = postagens;
	}

}
