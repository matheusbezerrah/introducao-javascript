var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event){
	var TdClicado = event.target;
	var TrClicado = TdClicado.parentNode;
	TrClicado.remove();
});

