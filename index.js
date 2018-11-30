// Write a function to add as many numbers and multiply as many numbers as the users put as an input.

// Add Numbers
function AddNumbers(arr){
	//Write code Here check the file text for instructions.
	let result = 0;
	for (let i = 0; i < arr.length; i++) {
		result += arr[i];
	}
	return result;
}

//MultiplyNum
function MultiplyNum(arr){
	let result = 1;
	for (let i = 0; i < arr.length; i++) {
		result *= arr[i];
	}
	return result;
}

console.log(AddNumbers([2,1,3,4]));
console.log(AddNumbers([2,1,-3,-4]));
console.log(MultiplyNum([2,1,3,4]));
console.log(MultiplyNum([2,1,3,-4]));

