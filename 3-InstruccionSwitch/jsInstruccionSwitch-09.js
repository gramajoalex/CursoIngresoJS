function mostrar() {
  let estacion = document.getElementById("txtIdEstacion").value;
  let destino = document.getElementById("txtIdDestino").value;
  let precioBase = 15000;
  let descuento = 0;
  let aumento = 0;
  let precioFinal;
  switch (estacion) {
    case "Invierno":
      if (destino == "Bariloche") {
        aumento = precioBase * 0.2;
      } else if (destino == "Cataratas" || destino == "Cordoba") {
        descuento = precioBase * 0.1;
      } else if (destino == "Mar del plata") {
        descuento = precioBase * 0.2;
      }
      break;
    case "Verano":
      if (destino == "Bariloche") {
        descuento = precioBase * 0.2;
      } else if (destino == "Cataratas" || destino == "Cordoba") {
        aumento = precioBase * 0.1;
      } else if (destino == "Mar del plata") {
        aumento = precioBase * 0.2;
      }
      break;
    case "Primavera":
    case "Otoño":
      if (destino != "Cordoba") {
        aumento = precioBase * 0.1;
      } else precioFinal = precioBase;
      break;
  }
  precioFinal = precioBase + aumento - descuento;
  alert("El precio final es $" + precioFinal.toFixed(2));
} //FIN DE LA FUNCIÓN
