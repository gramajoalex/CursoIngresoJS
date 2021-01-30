function mostrar()
{
	//tomo la edad  
	var edad = txtIdEdad.value
	var estadoCiv = estadoCivil.value
	var soltero = 'Soltero'
	if(edad < 18 && estadoCiv != soltero ){
		alert('Es muy pequeño para NO ser soltero.')
	}

}//FIN DE LA FUNCIÓN