const counter = {
		count:7,
		step: 2
		};

const getCounter = function(obj){
		for( key in obj){
		if(key == "count"){
		obj[key] += obj.step;
		console.log(obj[key])
}
}
}

getCounter(counter);