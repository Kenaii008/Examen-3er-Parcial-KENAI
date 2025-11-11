function calcularTotal() {

	var especialidad = document.getElementById('especialidad').value;
	var precioBase = 0;
	
	if (especialidad === 'clasica') precioBase = 80;
	else if (especialidad === 'bbq') precioBase = 100
	else if (especialidad === 'tocino') precioBase = 120;
	else if (especialidad === 'doble') precioBase = 150;
	else if (especialidad === 'hawaiana') precioBase = 180;

	
	var panSeleccionado = document.querySelector('input[name="pan"]:checked');
	var precioPan = 0;
	if (panSeleccionado) {
		precioPan = parseFloat(panSeleccionado.value);
	}

	
	var checkboxes = document.querySelectorAll('input[type="checkbox"][value]');
	var numIngredientes = 0;
	for (var i = 0; i < checkboxes.length; i++) {
		if (checkboxes[i].checked && checkboxes[i].id !== 'domicilio') {
			numIngredientes = numIngredientes + 1;
		}
	}
	
	var cantidad = parseInt(document.getElementById('cantidad').value);
	
	var esdomicilio = document.getElementById('domicilio').checked;

	
	var total = (precioBase + precioPan + (numIngredientes * 5)) * cantidad;
	
	if (esdomicilio) {
		total = total + 30;
	}

	
	document.getElementById('total').innerText = 'Total: $' + total.toFixed(2) + ' MXN';
}




	
	