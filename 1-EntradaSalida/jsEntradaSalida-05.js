/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre = txtIdNombre.value 
	var edad = txtIdEdad.value 
	var nombre = nombre[0].toUpperCase() + nombre.slice(1)
	alert('Su nombre es '+ nombre + ' y tiene ' + edad + ' años');
}

