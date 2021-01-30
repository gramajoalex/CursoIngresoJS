function mostrar()
{
	//tomo la edad  
	var edad = txtIdEdad.value
	var estadoCiv = estadoCivil.value
	var soltero = 'Soltero'
	if(edad >= 18 && estadoCiv == soltero ){
		alert('Es soltero y no es menor.')
	}

}//FIN DE LA FUNCIÓN