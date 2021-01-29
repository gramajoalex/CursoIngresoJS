/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

var numeroUno = parseInt(txtIdNumeroUno.value)
var numeroDos = parseInt(txtIdNumeroDos.value)

function sumar()
{	
	var numeroUno = parseInt(txtIdNumeroUno.value)
var numeroDos = parseInt(txtIdNumeroDos.value)
	suma = numeroUno + numeroDos
	alert('La suma es: ' + numeroUno + numeroDos)
}

function restar()
{
	alert('La resta es: ' + numeroUno - numeroDos)
}

function multiplicar()
{ 
	alert('La multiplicacion es: ' + numeroUno * numeroDos)
}

function dividir()
{
	alert('La division es: ' + numeroUno / numeroDos)
}

