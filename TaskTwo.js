const car = {
		make:'Toyota',
		model:'camry',
		year: '2021'
		};

const carProperties = function(car){

	for (key in car){
	console.log(car[key])	
}
}
carProperties(car)

