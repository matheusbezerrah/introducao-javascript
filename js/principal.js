var botaoNovo = document.querySelector("#btn-novo");
var botaoInserir = document.querySelector("#btn-inserir")
var arrayPacientes = document.querySelectorAll(".paciente");
var divFormPaciente = document.querySelector("#div-form-paciente");

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
}

// Visibilidade do formulário
escondeForm();
botaoNovo.addEventListener("click",function(){
	console.log('botão clicado');
	divFormPaciente.style.visibility = 'visible';
});

botaoInserir.addEventListener("click",function(){
	var formPaciente = document.querySelector("#form-paciente")
	var paciente = obtemPaciente(formPaciente);

	var tabela = document.querySelector("#tabela-pacientes");
	var pacienteTr = document.createElement("tr");

	var nomeTd = document.createElement("td");
	var pesoTd = document.createElement("td");
	var alturaTd = document.createElement("td");
	var gorduraTd = document.createElement("td");
	var imcTd = document.createElement("td");

	nomeTd.textContent = paciente.nome;
	pesoTd.textContent = paciente.peso;
	alturaTd.textContent = paciente.altura;
	gorduraTd.textContent = paciente.gordura;
	imcTd.textContent = paciente.imc;

	nomeTd.classList.add("info-nome");
	pesoTd.classList.add("info-peso");
	alturaTd.classList.add("info-altura");
	gorduraTd.classList.add("info-gordura");
	imcTd.classList.add("info-imc");

	pacienteTr.appendChild(nomeTd);
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(gorduraTd);
	pacienteTr.appendChild(imcTd);

	tabela.appendChild(pacienteTr);
	
	formPaciente.reset();
	escondeForm();

	console.log(imcTd);
	
});

function escondeForm(){
	divFormPaciente.style.visibility = 'hidden';
}

function obtemPaciente(formularioPaciente){
	var paciente = {

		nome: formularioPaciente.nome.value,
		peso: formularioPaciente.peso.value,
		altura: formularioPaciente.altura.value,
		gordura: formularioPaciente.gordura.value,
		imc: calculaImc(formularioPaciente.peso.value, formularioPaciente.altura.value)
	};

	return paciente;
}

function calculaImc (peso, altura) {
	var imc = peso / (altura * altura);
	return imc.toFixed(2);
}