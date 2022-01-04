package com.vivo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController //Anotação para dizer que essa classe é do tipo controller
public class StatusController {

	@GetMapping(path = "/api/status") // Anotação para dizer ao java/spring que será um método do tipo GET que será executado quando houver uma requisição.
	public String check() {
		return "Online!";
	}

}
