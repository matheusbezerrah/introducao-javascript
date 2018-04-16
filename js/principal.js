var botao = document.querySelector(".btn-teste");

var arrayPacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < arrayPacientes.length; i++){
	console.log(arrayPacientes	[i]);

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

}


function calculaImc (peso, altura) {
	var imc = peso / (altura * altura);
	return imc.toFixed(2);
}