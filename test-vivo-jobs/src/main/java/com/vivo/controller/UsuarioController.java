package com.vivo.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController //Anotação para dizer que essa classe é do tipo controller
public class UsuarioController {
/*
	@GetMapping(path = "/api/status") // Anotação para dizer ao java/spring que será um método do tipo GET que será executado quando houver uma requisição.
	public String check() {
		return "Online!";
	}
*/
	
	@GetMapping(path = "/api/usuario/{codigo}")
	public ResponseEntity consultar(@PathVariable("codigo") String codigo) {
		return null;
	}
}
