var arrayPacientes = document.querySelectorAll(".paciente");

// Calcula IMC
for(var i = 0; i < arrayPacientes.length; i++){

	var paciente = arrayPacientes[i];

	var tdPeso = paciente.querySelector(".info-peso");
	var tdAltura = paciente.querySelector(".info-altura");
	var tdImc = paciente.querySelector(".info-imc");

	var peso = tdPeso.textContent;
	var altura = tdAltura.textContent;
	
	tdImc.textContent = calculaImc(peso, altura);
}

function calculaImc (peso, altura) {
	var imc = peso / (altura * altura);
	return imc.toFixed(2);
}