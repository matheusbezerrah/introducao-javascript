var botaoBuscar = document.querySelector("#btn-buscar-pacientes");

botaoBuscar.addEventListener("click",function(){
	var xhr = new XMLHttpRequest();
	xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes");

	xhr.addEventListener("load",function(){
		console.log(xhr.responseText);
	});

	xhr.send();
});

