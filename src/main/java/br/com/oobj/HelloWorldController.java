package br.com.oobj;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/hello-world")
public class HelloWorldController {
	
	@RequestMapping(value = "/ola", method = RequestMethod.POST)
	public String olaMundo(String nome) {
		return "Olá "+nome;
	}	

	@RequestMapping(value = "/ola/pessoa", method = RequestMethod.POST)
	public String olaMundo(Pessoa pessoa) {
		return "Olá "+pessoa.getNome()+" "+pessoa.getSobrenome();
	}	
}
