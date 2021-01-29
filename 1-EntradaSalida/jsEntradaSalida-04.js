/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre = prompt('Escribe tu nombre')
	var nombre = nombre[0].toUpperCase() + nombre.slice(1)
	txtIdNombre.value = nombre
}

