const student = {
	name:"John",
}

function getKeys(student){
	return Object.keys(student)
}

const studentWithMultipleProps = { name: "John", age: 20, city: "Delhi" };

console.log(getKeys(student)); // Output: ["name"]
console.log(getKeys(studentWithMultipleProps)); // Output: ["name", "age", "city"]
