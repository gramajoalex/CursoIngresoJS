/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe = parseInt(txtIdImporte.value);
	var porcentaje = 25
	var resultado = importe*porcentaje/100
	txtIdResultado.value = importe-resultado
}
