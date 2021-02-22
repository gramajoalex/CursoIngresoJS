function mostrar() {
	//tomo el mes
	var mesDelAño = document.getElementById('txtIdMes').value;
	switch (mesDelAño) {
		// case 'Enero':
		// case 'Marzo':	
		// case 'Mayo':
		// case 'Julio':
		// case 'Agosto':
		// case 'Octubre':	
		// case 'Diciembre':
		case 'Junio':
		case 'Abril':
		case 'Septiembre':
		case 'Noviembre':
			alert('Este mes tiene 30 días')
			break;
		case 'Febrero':
			alert('Este mes tiene 28 días')
			break;
		default:
			alert('Este mes tiene 31 días')
			break;

	}
} //FIN DE LA FUNCIÓN