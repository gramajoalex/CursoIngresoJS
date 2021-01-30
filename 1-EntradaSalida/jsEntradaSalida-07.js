/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/

function sumar() {
  var numeroUno = parseInt(txtIdNumeroUno.value);
  var numeroDos = parseInt(txtIdNumeroDos.value);
  suma = numeroUno+numeroDos;
  alert(suma);
}

function restar() {
  var numeroUno = parseInt(txtIdNumeroUno.value);
  var numeroDos = parseInt(txtIdNumeroDos.value);
  var resta = numeroUno-numeroDos
  alert("La resta es: " + resta);
}

function multiplicar() {
  var numeroUno = parseInt(txtIdNumeroUno.value);
  var numeroDos = parseInt(txtIdNumeroDos.value);
  var multiplicacion = numeroUno*numeroDos
  alert("La multiplicacion es: " + multiplicacion);
}

function dividir() {
	var numeroUno = parseInt(txtIdNumeroUno.value);
	var numeroDos = parseInt(txtIdNumeroDos.value);
	var division = numeroUno/numeroDos
	alert("La division es: " + division);
}
