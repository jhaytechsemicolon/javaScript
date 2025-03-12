const person = {
		firstName: 'jubilant',
		lastName: 'ihensekhien',
		age: 35
		}

	
const getPerson = function(details){
	return(`First Name: ${person.firstName} Last Name:${person.lastName} Age:${person.age}`)
}
console.log(getPerson(person));