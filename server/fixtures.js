if (Jornada.find().count() === 0) {
	var actual = new Date().getTime();
	Jornada.insert({
		usuario: 'Nahuel',
		llegada: new Date(actual - 10 * 3600 * 1000),
		salida: new Date(actual - 10 * 3600 * 1000)
	});
}