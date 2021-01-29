/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado = txtIdNombre.value;
	nombreIngresado = nombreIngresado[0].toUpperCase() + nombreIngresado.slice(1)
	alert(nombreIngresado);

}


