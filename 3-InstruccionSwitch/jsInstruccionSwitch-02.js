function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	switch (mesDelAño) {
		case 'Junio':
		case 'Julio':
		case 'Agosto':
			alert('Abrigate que hace frío')
			break;
		case 'Enero':
		case 'Febrero':	
		case 'Marzo': 
		case 'Abril':
		case 'Mayo':
			alert('Falta para el invierno')
			break;
		case 'Septiembre':
		case 'Octubre':
		case 'Noviembre':
		case 'Diciembre':
			alert('Ya paso el invierno, ahora calor!!')
			break;
	}

}//FIN DE LA FUNCIÓN