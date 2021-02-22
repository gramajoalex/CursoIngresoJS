/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/

function mostrarAumento() {
  let sueldo = parseInt(txtIdSueldo.value);
  let porcentaje = 10;
  let aumento = (sueldo * porcentaje) / 100;
  let resultado = document.getElementById("txtIdResultado");
  resultado.value = aumento + sueldo;
}
