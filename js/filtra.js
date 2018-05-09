var campoFiltroNome = document.querySelector("#nome-filtro");

campoFiltroNome.addEventListener("input",function(){

	// conta qtd de caracteres
	var qtdCaracteres = document.querySelector("#qtd_caracteres");
	qtdCaracteres.textContent = this.value.length;

	
	var pacientesArray = document.querySelectorAll(".paciente");

	if(this.value.length > 0){
		pacientesArray.forEach(function(paciente){
			var nomePaciente = paciente.querySelector(".info-nome").textContent;

			var expressao = new RegExp(campoFiltroNome.value,"i");

			if(!expressao.test(nomePaciente)){
				paciente.classList.add("invisivel");
			}else{
				paciente.classList.remove("invisivel");
			}

		});
	}else{
		pacientesArray.forEach(function(paciente){
			paciente.classList.remove("invisivel");
		});
	}

});