/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombre = prompt('Escribe tu nombre')
	var nombre = nombre[0].toUpperCase() + nombre.slice(1);
	alert(nombre);
}

