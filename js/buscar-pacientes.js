var botaoBuscar = document.querySelector("#btn-buscar-pacientes");

botaoBuscar.addEventListener("click",function(){
	var xhr = new XMLHttpRequest();
	xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes");

	xhr.addEventListener("load",function(){
		var pacientes = JSON.parse(xhr.responseText);

		pacientes.forEach(function(paciente){
			adicionaPacientesTabela(paciente);
		});

	});

	xhr.send();
});
