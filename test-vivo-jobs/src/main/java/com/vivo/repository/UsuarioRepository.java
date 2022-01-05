package com.vivo.repository;

import org.springframework.data.repository.CrudRepository;
import com.vivo.model.UsuarioModel;

/*Classe responsável por fazer as consultas no banco de dados*/

public interface UsuarioRepository extends CrudRepository<UsuarioModel, Integer> {

}
