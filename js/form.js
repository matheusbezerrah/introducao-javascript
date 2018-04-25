var botaoNovo = document.querySelector("#btn-novo");
var botaoInserir = document.querySelector("#btn-inserir");
var divFormPaciente = document.querySelector("#div-form-paciente");

// Visibilidade do formulário
escondeForm();
botaoNovo.addEventListener("click",function(){
	divFormPaciente.style.visibility = 'visible';
});

botaoInserir.addEventListener("click",function(){
	var formPaciente = document.querySelector("#form-paciente")
	var paciente = obtemPaciente(formPaciente);
	var tabela = document.querySelector("#tabela-pacientes");
	
	pacienteTr = montaPacienteTr(paciente);
	tabela.appendChild(pacienteTr);
	
	formPaciente.reset();
	escondeForm();	
});

function montaPacienteTr(paciente){
	var pacienteTr = document.createElement("tr");

	pacienteTr.appendChild(montaPacienteTd(paciente.nome, "info-nome"));
	pacienteTr.appendChild(montaPacienteTd(paciente.peso, "info-peso"));
	pacienteTr.appendChild(montaPacienteTd(paciente.altura, "info-altura"));
	pacienteTr.appendChild(montaPacienteTd(paciente.gordura, "info-gordura"));
	pacienteTr.appendChild(montaPacienteTd(paciente.imc, "info-imc"));

	return pacienteTr;
}

function montaPacienteTd(dado, classe){
	var td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);

	return td;
}

function obtemPaciente(formularioPaciente){
	var paciente = {

		nome: formularioPaciente.nome.value,
		peso: formularioPaciente.peso.value,
		altura: formularioPaciente.altura.value,
		gordura: formularioPaciente.gordura.value,
		imc: calculaImc(formularioPaciente.peso.value, formularioPaciente.altura.value)
	};

	console.log(paciente);

	return paciente;
}

function escondeForm(){
	divFormPaciente.style.visibility = 'hidden';
}