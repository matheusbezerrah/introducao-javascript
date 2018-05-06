var arrayPacientes = document.querySelectorAll(".paciente");

// Calcula IMC
for(var i = 0; i < arrayPacientes.length; i++){

	var paciente = arrayPacientes[i];

	var tdNome = paciente.querySelector(".info-nome");
	var tdPeso = paciente.querySelector(".info-peso");
	var tdAltura = paciente.querySelector(".info-altura");
	var tdGordura = paciente.querySelector(".info-gordura");
	var tdImc = paciente.querySelector(".info-imc");

	var nome = tdNome.textContent;
	var peso = tdPeso.textContent;
	var altura = tdAltura.textContent;
	var gordura = tdGordura.textContent;
	var imc = calculaImc(peso, altura);

	tdImc.textContent = imc;

	if (peso > 300){
		paciente.classList.add("fundo-invalido");
		var erro = document.querySelector("#erro");
		erro.textContent = "Peso Inválido";
	}
}

function calculaImc (peso, altura) {
	var imc = 0;
	var imc = peso / (altura * altura);
	return imc.toFixed(2);
}