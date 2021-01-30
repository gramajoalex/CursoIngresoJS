function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var random = parseInt(Math.random()*(10))
	if(random >= 9 ){
		alert('Excelente')
	}else if (random >= 4) {
		alert('Aprobado')
	} else {
		alert('La proxima se puede')
	}
}//FIN DE LA FUNCIÓN