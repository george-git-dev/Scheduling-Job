package com.vivo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.vivo.model.UsuarioModel;
import com.vivo.repository.UsuarioRepository;

@RestController // Anotação para dizer que essa classe é do tipo controller
public class UsuarioController {
	/*
	 * @GetMapping(path = "/api/status") // Anotação para dizer ao java/spring que
	 * será um método do tipo GET que será executado quando houver uma requisição.
	 * public String check() { return "Online!"; }
	 */
	@Autowired
	private UsuarioRepository repository;

	@GetMapping(path = "/api/usuario/{codigo}")
	public ResponseEntity consultar(@PathVariable("codigo") Integer codigo) {
		return repository.findById(codigo)
				.map(record -> ResponseEntity.ok().body(record))
				.orElse(ResponseEntity.notFound().build());
	}
	
	@PostMapping(path = "/api/usuario/salvar")
	public UsuarioModel salvar(@RequestBody UsuarioModel usuario) {
		return repository.save(usuario);
	}
}
