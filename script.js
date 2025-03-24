const student = {
	name:"John",
	age:24,
    city:"jaipur",
}

function getKeys(student){
	return Object.keys(student)
}

console.log(getKeys(student))